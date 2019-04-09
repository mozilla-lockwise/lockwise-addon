/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "../actions";
import helpers from "../telemetry";

export default (store) => (next) => (action) => {
  try {
    switch (action.type) {
    case actions.CONCEAL_PASSWORD:
      helpers.passwordConcealed(action, "itemDetailDoorhanger");
      break;
    case actions.COPIED_FIELD_COMPLETED:
      helpers.itemCopied(action, "itemDetailDoorhanger");
      break;
    case actions.LIST_ITEMS_COMPLETED:
      const state = store.getState();
      helpers.listShown(action, "itemListDoorhanger", state.cache.items);
      break;
    case actions.OPEN_WEBSITE:
      helpers.websiteOpened(action, "itemDetailDoorhanger");
      break;
    case actions.REVEAL_PASSWORD:
      helpers.passwordRevealed(action, "itemDetailDoorhanger");
      break;
    case actions.SELECT_ITEM_COMPLETED:
      if (action.item) {
        helpers.itemShown(action, "itemDetailDoorhanger");
      }
      break;
    case actions.SELECT_ITEM_STARTING:
      if (action.item) {
        helpers.itemSelected(action, "doorhanger");
      }
      break;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Unable to record telemetry event", e);
  }

  return next(action);
};
