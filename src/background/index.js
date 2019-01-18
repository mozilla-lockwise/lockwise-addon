/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import updateBrowserAction from "./browser-action";
import initializeMessagePorts from "./message-ports";
import { initializeTelemetry } from "./telemetry";
import { initializeDataStore } from "./datastore";

Promise.resolve().then(async () => {
  initializeTelemetry();
  initializeMessagePorts();
  await initializeDataStore();
  await updateBrowserAction();
});
