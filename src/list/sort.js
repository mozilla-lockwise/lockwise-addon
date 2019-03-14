/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SORT_BY_NAME, SORT_BY_LAST_USED, SORT_BY_LAST_CHANGED } from "./actions";

const collator = new Intl.Collator();

export const sortActions = [
  SORT_BY_NAME,
  SORT_BY_LAST_USED,
  SORT_BY_LAST_CHANGED,
];

export const byName = (a, b) => collator.compare(a.title, b.title);

export const byLastUsed = (a, b) => a.timeLastUsed < b.timeLastUsed;

export const byLastChanged = (a, b) => a.timePasswordChanged < b.timePasswordChanged;

export const getAction = (name) => {
  switch (name) {
  case "last-changed":
    return SORT_BY_LAST_CHANGED;
  case "last-used":
    return SORT_BY_LAST_USED;
  case "name":
  default:
    return SORT_BY_NAME;
  }
};

export const getSortForAction = (action) => {
  switch (action) {
  case SORT_BY_LAST_CHANGED:
    return byLastChanged;
  case SORT_BY_LAST_USED:
    return byLastUsed;
  case SORT_BY_NAME:
  default:
    return byName;
  }
};

export const getName = (action) => {
  switch (action) {
  case SORT_BY_LAST_CHANGED:
    return "last-changed";
  case SORT_BY_LAST_USED:
    return "last-used";
  case SORT_BY_NAME:
  default:
    return "name";
  }
};

export const getSort = (name) => {
  switch (name) {
  case "last-changed":
    return byLastChanged;
  case "last-used":
    return byLastUsed;
  case "name":
  default:
    return byName;
  }
};
