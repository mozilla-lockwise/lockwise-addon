/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/* globals AppConstants, browser, Components, CustomizableUI, dispatcher,
   ExtensionCommon, ExtensionAPI, Services, XPCOMUtils */

"use strict";

ChromeUtils.defineModuleGetter(this, "ExtensionUtils",
                               "resource://gre/modules/ExtensionUtils.jsm");
ChromeUtils.defineModuleGetter(this, "LoginHelper",
                               "resource://gre/modules/LoginHelper.jsm");
ChromeUtils.defineModuleGetter(this, "Services",
                               "resource://gre/modules/Services.jsm");

const { ExtensionError } = ExtensionUtils;

const getLogins = () => {
  const logins = Services.logins.
    getAllLogins().
    filter((l) => !(l.hostname || "").startsWith("chrome://")).
    map(LoginHelper.loginToVanillaObject);
  return logins;
};

const getLogin = (id) => {
  const login = getLogins().
    filter(l => l.guid === id)[0];
  return login || null;
};

this.logins = class extends ExtensionAPI {
  getAPI(context) {
    const EventManager = ExtensionCommon.EventManager;
    return {
      experiments: {
        logins: {
          // See schema.json for function documentation.
          getAll() {
            const logins = getLogins();
            return logins;
          },
          get(id) {
            const login = getLogin(id);
            return login;
          },
          add(loginInfo) {
            if (getLogin(loginInfo.guid)) {
              throw new ExtensionError(`Add failed: Login already exists with ID ${loginInfo.guid}`);
            }
            try {
              const login = LoginHelper.vanillaObjectToLogin(loginInfo);
              Services.logins.addLogin(login);
              const createdLogin = getLogin(loginInfo.guid);
              return createdLogin;
            } catch (ex) {
              throw new ExtensionError(ex);
            }
          },
          update(loginInfo) {
            const login = getLogin(loginInfo.guid);
            if (!login) {
              throw new ExtensionError(`Update failed: Login not found with ID ${loginInfo.guid}`);
            }
            try {
              const loginAndMetaData = LoginHelper.newPropertyBag(loginInfo);
              Services.logins.modifyLogin(login, loginAndMetaData);
              const updatedLogin = getLogin(loginInfo.guid);
              return updatedLogin;
            } catch (ex) {
              throw new ExtensionError(ex);
            }
          },
          touch(id) {
            const login = getLogin(id);
            if (!login) {
              throw new ExtensionError(`Touch failed: Login not found with ID ${id}`);
            }
            try {
              const updates = LoginHelper.newPropertyBag({
                guid: login.guid,
                timesUsedIncrement: 1,
                timeLastUsed: Date.now(),
              });
              Services.logins.modifyLogin(login, updates);
              const updatedLogin = getLogin(loginInfo.guid);
              return updatedLogin;
            } catch (ex) {
              throw new ExtensionError(ex);
            }
          },
          remove(id) {
            const login = getLogin(id);
            if (!login) {
              throw new ExtensionError(`Remove failed: Login not found with ID ${id}`);
            }
            try {
              Services.logins.removeLogin(LoginHelper.vanillaObjectToLogin(login));
            } catch (ex) {
              throw new ExtensionError(ex);
            }
          },
          onAdded: new EventManager(context, "logins.onAdded", fire => {
            const callback = (value) => {
              fire.async(value);
            };
            const observer = {
              observe: (subject, topic, type) => {
                if (type !== "addLogin") {
                  return;
                }
                subject.QueryInterface(Ci.nsILoginMetaInfo).QueryInterface(Ci.nsILoginInfo);
                const login = LoginHelper.loginToVanillaObject(subject);
                callback({ login });
              },
            };
            Services.obs.addObserver(observer, "passwordmgr-storage-changed");
            return () => {
              Services.obs.removeObserver(observer, "passwordmgr-storage-changed");
            };
          }).api(),
          onUpdated: new EventManager(context, "logins.onUpdated", fire => {
            const callback = (value) => {
              fire.async(value);
            };
            const observer = {
              observe: (subject, topic, type) => {
                if (type !== "modifyLogin") {
                  return;
                }
                subject.QueryInterface(Ci.nsIArrayExtensions);
                const newLogin = subject.GetElementAt(1);
                const login = LoginHelper.loginToVanillaObject(newLogin);
                callback({ login });
              },
            };
            Services.obs.addObserver(observer, "passwordmgr-storage-changed");
            return () => {
              Services.obs.removeObserver(observer, "passwordmgr-storage-changed");
            };
          }).api(),
          onRemoved: new EventManager(context, "logins.onRemoved", fire => {
            const callback = (value) => {
              fire.async(value);
            };
            const observer = {
              observe: (subject, topic, type) => {
                if (type !== "removeLogin") {
                  return;
                }
                subject.QueryInterface(Ci.nsILoginMetaInfo).QueryInterface(Ci.nsILoginInfo);
                const login = LoginHelper.loginToVanillaObject(subject);
                callback({ login });
              },
            };
            Services.obs.addObserver(observer, "passwordmgr-storage-changed");
            return () => {
              Services.obs.removeObserver(observer, "passwordmgr-storage-changed");
            };
          }).api(),
          onAllRemoved: new EventManager(context, "logins.onAllRemoved", fire => {
            const callback = (value) => {
              fire.async(value);
            };
            const observer = {
              observe: (subject, topic, type) => {
                if (type !== "removeAllLogins") {
                  return;
                }
                callback();
              },
            };
            Services.obs.addObserver(observer, "passwordmgr-storage-changed");
            return () => {
              Services.obs.removeObserver(observer, "passwordmgr-storage-changed");
            };
          }).api(),
        },
      },
    };
  }
};
