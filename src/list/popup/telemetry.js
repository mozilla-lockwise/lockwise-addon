/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "../actions";
import * as telemetry from "../../telemetry";

export default (store) => (next) => (action) => {
  try {
    switch (action.type) {
    case actions.SELECT_ITEM_COMPLETED:
      if (action.item) {
        telemetry.recordEvent("itemSelected", "doorhanger",
                              {itemid: action.item.id});
      }
      break;
    case actions.COPIED_FIELD:
      telemetry.recordEvent(`${action.field}Copied`, "doorhanger");
      break;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Unable to record telemetry event", e);
  }

  return next(action);
};
