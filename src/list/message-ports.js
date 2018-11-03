/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { addedItem, updatedItem, removedItem } from "./actions";

let messagePort;

export default function initializeMessagePorts(store) {
  // Listen for changes to the datastore from other sources and dispatch actions
  // to sync those changes with our Redux store.
  messagePort = browser.runtime.connect();
  messagePort.onMessage.addListener((message) => {
    switch (message.type) {
    case "added_item":
      store.dispatch(addedItem(message.item));
      break;
    case "updated_item":
      store.dispatch(updatedItem(message.item));
      break;
    case "removed_item":
      store.dispatch(removedItem(message.id));
      break;
    }
  });
}
