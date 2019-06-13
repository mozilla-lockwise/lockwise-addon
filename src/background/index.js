/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import updateBrowserAction from "./browser-action";
import initializeMessagePorts from "./message-ports";
import { initializeTelemetry } from "./telemetry";
import { initializeDataStore } from "./datastore";
import { initializeEnvironment } from "./environment";
import { initializeProfileInfo } from "./profile";

Promise.resolve().then(async () => {
  await initializeEnvironment();

  // The `shouldUseEmbedded()` check tells us if FF version is less than 68. It
  // turns out there is another bug (1555734) that has nothing to do with whether
  // or not we need to use the embedded `recordEvent`, but does require that we
  // only enable telemetry for 68+. Hence, despite the misleading name, it's the
  // right function to call here.
  const enableTelemetry = !(await browser.experiments.temptelemetry.shouldUseEmbedded());
  initializeTelemetry(enableTelemetry);
  initializeMessagePorts();
  await initializeDataStore();
  await initializeProfileInfo();
  await updateBrowserAction();
});
