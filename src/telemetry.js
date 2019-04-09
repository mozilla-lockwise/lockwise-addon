/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export async function recordEvent({ method, object, extra = null, value = null}) {
  return browser.runtime.sendMessage({
    type: "telemetry_event",
    data: { method, object, extra, value },
  });
}

export async function scalarAdd({ name, value }) {
  return browser.runtime.sendMessage({
    type: "telemetry_add",
    data: { name, value },
  });
}

