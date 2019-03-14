/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "../actions";
import helpers from "../telemetry";
import { recordEvent } from "../../telemetry";

export default (store) => (next) => (action) => {
  try {
    // Note: cases are alphabetized.
    switch (action.type) {
    case actions.ADD_ITEM_COMPLETED:
      if (action.interactive && action.item) {
        recordEvent({
          method: "itemAdd",
          object: "manager",
          extra: { itemid: action.item.id },
        });
      }
      break;
    case actions.CONCEAL_PASSWORD:
      helpers.passwordConcealed(action, "itemDetailManager");
      break;
    case actions.COPIED_FIELD_COMPLETED:
      helpers.itemCopied(action, "itemDetailManager");
      break;
    case actions.EDIT_CURRENT_ITEM:
      // Accessing item info from the store requires waiting a turn.
      setTimeout(() => {
        const state = store.getState();
        recordEvent({
          method: "show",
          object: "itemEdit",
          extra: { itemid: state.list.selectedItemId },
        });
      }, 0);
      break;
    case actions.LIST_ITEMS_COMPLETED:
      // Accessing item info from the store requires waiting a turn.
      // In this case, it happens if the manage page is hard refreshed.
      setTimeout(() => {
        const state = store.getState();
        helpers.listShown(action, "itemListManager", state.cache.items);
      }, 0);
      break;
    case actions.OPEN_FAQ:
      recordEvent({
        method: "click",
        object: "faq",
      });
      break;
    case actions.OPEN_FEEDBACK:
      recordEvent({
        method: "click",
        object: "giveFeedback",
      });
      break;
    case actions.OPEN_GET_MOBILE:
      recordEvent({
        method: "click",
        object: "getMobile",
      });
      break;
    case actions.OPEN_SYNC_PREFS:
      recordEvent({
        method: "click",
        object: action.id,
      });
      break;
    case actions.OPEN_WEBSITE:
      helpers.websiteOpened(action, "itemDetailManager");
      break;
    case actions.REMOVE_ITEM_COMPLETED:
      if (action.interactive && action.item) {
        recordEvent({
          method: "itemDelete",
          object: "manager",
          extra: { itemid: action.item.id },
        });
      }
      break;
    case actions.REVEAL_PASSWORD:
        helpers.passwordRevealed(action, "itemDetailManager");
      break;
    case actions.SELECT_ITEM_STARTING:
      if (action.item) {
        helpers.itemSelected(action, "manager");
      }
      break;
    case actions.SELECT_ITEM_COMPLETED:
      helpers.itemShown(action, "itemDetailManager");
      break;
    case actions.SHOW_MODAL:
      if (action.id === "delete") {
        const state = store.getState();
        recordEvent({
          method: "show",
          object: "deleteConfirm",
          extra: { itemid: state.list.selectedItemId },
        });
      }
      break;
    case actions.SHOW_PROFILE_MENU:
      recordEvent({
        method: "click",
        object: "settingsMenu",
      });
      break;
    case actions.SORT_BY_LAST_CHANGED:
      recordEvent({
        method: "click",
        object: "sortMenu",
        value: "lastChanged",
      });
      break;
    case actions.SORT_BY_LAST_USED:
      recordEvent({
        method: "click",
        object: "sortMenu",
        value: "lastUsed",
      });
      break;
    case actions.SORT_BY_NAME:
      recordEvent({
        method: "click",
        object: "sortMenu",
        value: "name",
      });
      break;
    case actions.START_NEW_ITEM:
      recordEvent({
        method: "show",
        object: "newItem",
      });
      break;
    case actions.UPDATE_ITEM_COMPLETED:
      if (action.interactive && action.item) {
        recordEvent({
          method: "itemUpdate",
          object: "manager",
          extra: { itemid: action.item.id },
        });
      }
      break;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Unable to record telemetry event", e);
  }

  return next(action);
};
