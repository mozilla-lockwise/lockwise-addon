/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

let popup;

function installPopup(path) {
  popup = browser.extension.getURL(path);
  browser.browserAction.setPopup({
    popup,
  });
}

function uninstallPopup() {
  if (popup) {
    browser.browserAction.setPopup({ popup: "" });
  }
  popup = null;
}

function installEntriesAction() {
  return installPopup("list/popup.html");
}

export default async function updateBrowserAction() {
  // clear listener
  // XXXX: be more efficient with this?
  uninstallPopup();

  const iconpath = "icons/lb_locked.svg";
  browser.browserAction.setIcon({ path: iconpath });

  return installEntriesAction();
}
