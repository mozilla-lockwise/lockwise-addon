/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { broadcast } from "./message-ports";

let profileInfo = null;

export function updateProfileInfo(update) {
  profileInfo = update;
  broadcast({ type: "profile_info", profile: profileInfo });
}

export async function initializeProfileInfo() {
  const { sync } = browser.experiments;
  updateProfileInfo(await sync.getUserProfileInfo());
  sync.onUserProfileChanged.addListener(updateProfileInfo);
}

export function getProfileInfo() {
  return profileInfo;
}

export default initializeProfileInfo;
