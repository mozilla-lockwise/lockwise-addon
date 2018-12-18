/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import openDataStore from "./datastore";
import { openView, closeView } from "./views";
import { makeItemSummary } from "../common";
import telemetry from "./telemetry";
import clipboard from "./clipboard";

const ports = new Set();

function broadcast(message, excludedSender) {
  for (let p of ports) {
    if (!excludedSender || p.sender.contextId !== excludedSender.contextId) {
      p.postMessage(message);
    }
  }
}

export default function initializeMessagePorts() {
  browser.runtime.onConnect.addListener((port) => {
    ports.add(port);
    port.onDisconnect.addListener(() => ports.delete(port));
  });

  browser.runtime.onMessage.addListener(async (message, sender) => {
    switch (message.type) {
    case "open_view":
      return openView(message.name).then(() => ({}));
    case "close_view":
      return closeView(message.name).then(() => ({}));

    case "list_items":
      return openDataStore().then(async (ds) => {
        const entries = (await ds.list()).map(makeItemSummary);
        telemetry.scalarSet("datastoreCount", entries.length);
        return { items: entries };
      });
    case "get_item":
      return openDataStore().then(async (ds) => {
        return { item: await ds.get(message.id) };
      });
    case "add_item":
      return openDataStore().then(async (ds) => {
        const item = await ds.add(message.item);
        broadcast({type: "added_item", item}, sender);
        return {item};
      });
    case "update_item":
      return openDataStore().then(async (ds) => {
        const item = await ds.update(message.item);
        broadcast({ type: "updated_item", item }, sender);
        return { item };
      });
    case "remove_item":
      return openDataStore().then(async (ds) => {
        await ds.remove(message.id);
        broadcast({type: "removed_item", id: message.id}, sender);
        return {};
      });

    case "telemetry_event":
        telemetry.recordEvent(message.method, message.object, message.extra);
      return {};
    case "telemetry_scalar":
        telemetry.scalarSet(message.name, message.value);
        return {};
    case "copied_field":
        await clipboard.copyToClipboard(message.field, message.toCopy);
        return {};
    default:
      return null;
    }
  });
}
