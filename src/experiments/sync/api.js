/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/* globals ChromeUtils, ExtensionAPI, ExtensionCommon, ObjectUtils, Services,
   UIState */

"use strict";

ChromeUtils.defineModuleGetter(this, "Services",
                               "resource://gre/modules/Services.jsm");
ChromeUtils.defineModuleGetter(this, "UIState",
                               "resource://services-sync/UIState.jsm");
ChromeUtils.defineModuleGetter(this, "ObjectUtils",
                               "resource://gre/modules/ObjectUtils.jsm");

const getProfileInfo = async () => {
  const uiState = UIState.get();
  // STATUS_LOGIN_FAILED means the password was changed on another device, and the
  // user needs to log in again.
  // STATUS_NOT_VERIFIED means the user has logged in with an unverified email.
  // In both cases, the user needs to take action elsewhere in Firefox.
  const errors = [UIState.STATUS_LOGIN_FAILED, UIState.STATUS_NOT_VERIFIED];

  let profileInfo;

  // STATUS_NOT_CONFIGURED means the user is not logged in.
  if (uiState.status === UIState.STATUS_NOT_CONFIGURED) {
    profileInfo = null;
  } else { // UIState.STATUS_SIGNED_IN, the user is logged in and verified.
    const fxa = await UIState._internal.fxAccounts.getSignedInUser();
    const isErrorStatus = errors.includes(uiState.status);

    profileInfo = {
      id: fxa && fxa.uid,
      email: uiState.email,
      displayName: uiState.displayName || null,
      avatar: uiState.avatarURL || null,
      status: isErrorStatus ? "error" : "ok",
    };
  }

  return profileInfo;
};

this.sync = class extends ExtensionAPI {
  getAPI(context) {
    const EventManager = ExtensionCommon.EventManager;
    return {
      experiments: {
        sync: {
          async getCurrentState(syncType) {
            return Services.prefs.getBoolPref("services.sync.engine." + syncType, false);
          },
          async getUserProfileInfo() {
            const profileInfo = await getProfileInfo();
            return profileInfo;
          },
          async openPreferences(entrypoint) {
            const win = Services.wm.getMostRecentWindow("navigator:browser");
            win.openPreferences("paneSync", { urlParams: { entrypoint } });
          },
          onUserProfileChanged: new EventManager(context, "sync.onUserProfileChanged", async (fire) => {
            let oldValue = await getProfileInfo();
            const callback = (value) => {
              fire.async(value);
            };
            const observer = {
              observe: async (subject, topic, type) => {
                const newProfileInfo = await getProfileInfo();
                // Sync fires duplicate events. Filter out events where:
                // - old and new UserProfileInfo are both null
                // - old and new UserProfileInfo are objects with same values.
                // Happily, ObjectUtils.deepEqual(null, null) is true.
                if (ObjectUtils.deepEqual(oldValue, newProfileInfo)) {
                  return;
                }
                // Sync also fires two events when a verified login occurs:
                // one as soon as login succeeds, with status "ok" but null
                // avatar and displayName, and a second after pinging the FxA
                // profile server, with status 'ok' and non-null avatar and
                // possibly non-null displayName. Suppress the first one.
                if (newProfileInfo &&
                    newProfileInfo.status === "ok" &&
                    newProfileInfo.avatar === null) {
                  return;
                }
                oldValue = newProfileInfo;
                callback(newProfileInfo);
              },
            };
            Services.obs.addObserver(observer, "sync-ui-state:update");
            return () => {
              Services.obs.removeObserver(observer, "sync-ui-state:update");
            };
          }).api(),
        },
      },
    };
  }
};
