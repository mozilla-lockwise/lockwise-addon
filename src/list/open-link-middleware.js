/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "./actions";
import { version } from "../../package";
import { openWebsite } from "./common";

// TODO: Update these links?
const urls = {
  feedback: "https://qsurvey.mozilla.com/s3/Lockbox-Input?ver=" + version,
  faq: "https://lockwise.firefox.com/faq.html",
  homepage: "https://lockwise.firefox.com",
  appStore: "https://app.adjust.com/eu4xdqg?redirect=https://itunes.apple.com/us/app/firefox-lockbox/id1314000270?mt=8",
  androidStore: "https://app.adjust.com/eu4xdqg?redirect=https://play.google.com/store/apps/details?id=mozilla.lockbox",
};

function openTargetedWebsite(url, target, close) {
  const location = (target) ?
      `${url}#${target}` :
      url;
  openWebsite(location, close);
}

export default (store) => (next) => (action) => {
  switch (action.type) {
  case actions.OPEN_FAQ:
    openTargetedWebsite(urls.faq, action.target, action.close);
    break;
  case actions.OPEN_FEEDBACK:
    openWebsite(urls.feedback, false);
    break;
  case actions.OPEN_HOMEPAGE:
    openWebsite(urls.homepage, false);
    break;
  case actions.OPEN_SYNC_PREFS:
    browser.experiments.sync.openPreferences("lockbox-addon");
    break;
  case actions.OPEN_APP_STORE:
    openWebsite(urls.appStore, false);
    break;
  case actions.OPEN_PLAY_STORE:
    openWebsite(urls.androidStore, false);
    break;
  case actions.OPEN_WEBSITE:
    const url = action.item.origins[0];
    openWebsite(url, false);
    break;
  }
  return next(action);
};
