/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { sortActions, getName } from "../sort";

// This could grow into a generic localStorage middleware, but for now, it just
// saves the current sort option in the manage page UI, so that the user's
// preferred sort is persisted across page reloads.

// Cache in memory to minimize the number of localStorage calls.
let currentSort;

export const saveSort = (store) => (next) => (action) => {
  if (sortActions.includes(action.type)) {
    const sort = getName(action.type);
    if (currentSort !== sort) {
      currentSort = sort;
      browser.storage.local.set({ sort })
        .catch(console.error); // eslint-disable-line no-console
    }
  }
  return next(action);
};

export const loadSort = async () => {
  let storage;
  try {
    storage = await browser.storage.local.get();
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.error("loadSort failed: ", ex);
  }
  currentSort = storage.sort;
  return storage.sort;
};
