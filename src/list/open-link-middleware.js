/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "./actions";
import { version } from "../../package";
import { openWebsite } from "./common";

// TODO: Update these links?
const urls = {
  feedback: "https://qsurvey.mozilla.com/s3/Lockbox-Input?ver=" + version,
  faq: "https://lockbox.firefox.com/faq.html",
  homepage: "https://lockbox.firefox.com",
};

export default (store) => (next) => (action) => {
  switch (action.type) {
  case actions.OPEN_FAQ:
    openWebsite(urls.faq, action.close || false);
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
  }
  return next(action);
};
