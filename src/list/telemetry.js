/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { recordEvent, scalarAdd } from "../telemetry";

// Telemetry action handlers shared by manage and popup middleware.
// Alphabetized ftw.

// object = "itemDetailManager" || "itemDetailDoorhanger"
const itemCopied = (action, object) => {
  if (action.field === "username" || action.field === "password") {
    const method = action.field === "username" ? "copyUsername" : "copyPassword";
    recordEvent({
      method,
      object,
    });
    scalarAdd({
      name: "loginsAccessed",
      value: 1,
    });
  }
};

// object =  'manager' || 'doorhanger'
const itemSelected = (object) => {
  recordEvent({
    method: "itemSelected",
    object,
  });
};

// object = "itemDetailManager" || "itemDetailDoorhanger"
const itemShown = (object) => {
  recordEvent({
    method: "show",
    object,
  });
};

// object = "itemListManager" || "itemListDoorhanger"
const listShown = (object, list) => {
  const hasLogins = !!list.length;
  recordEvent({
    method: "show",
    object,
    value: hasLogins.toString(), // XXX have to use strings for 'value', not booleans
  });
};

// object = "itemDetailManager" || "itemDetailDoorhanger"
const passwordConcealed = (object) => {
  recordEvent({
    method: "concealPassword",
    object,
  });
};

// object = "itemDetailManager" || "itemDetailDoorhanger"
const passwordRevealed = (object) => {
  recordEvent({
    method: "revealPassword",
    object,
  });
  scalarAdd({
    name: "loginsAccessed",
    value: 1,
  });
};

// object = "itemDetailManager" || "itemDetailDoorhanger"
const websiteOpened = (object) => {
  recordEvent({
    method: "openWebsite",
    object,
  });
};

export default {
  itemCopied,
  itemSelected,
  itemShown,
  listShown,
  passwordConcealed,
  passwordRevealed,
  websiteOpened,
};
