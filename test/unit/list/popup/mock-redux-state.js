/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Keep these in sync with <src/webextension/list/popup/reducers.js>.

export const initialState = {
  cache: {
    items: [],
    currentItem: null,
  },
  list: {
    selectedItemId: null,
    filter: {
      query: "",
      userEntered: true,
    },
  },
};

export const filledState = {
  cache: {
    items: [
      {id: "0", title: "origin-0.com", username: "username 0",
       origins: ["http://origin-0.com"]},
      {id: "1", title: "origin-1.com", username: "username 1",
       origins: ["http://origin-1.com"]},
      {id: "2", title: "origin-2.com", username: "username 2",
       origins: ["http://origin-2.com"]},
    ],
    currentItem: {
      id: "1",
      origins: ["http://origin-1.com"],
      title: "origin-1.com",
      entry: {
        kind: "login",
        username: "username 1",
        password: "password 1",
      },
    },
  },
  list: {
    selectedItemId: "1",
    filter: {
      query: "",
      userEntered: true,
    },
  },
};
