/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const TELEMETRY_CATEGORY = "lockboxv1";

//  In this project, telemetry is handled via redux middleware that listens for
//  actions dispatched when things are clicked, displayed, or loaded. Some of
//  the actions don't affect the actual redux store, but it seemed cleaner to
//  consolidate telemetry gathering in one place, rather than give components
//  awareness of some telemetry library. Also, because some components are
//  shared between the popup and manage UI, using the component would require
//  passing along some kind of flag to decide which view the component is in,
//  which seems like a code smell, while the action / middleware approach solves
//  this nicely.

let enabled = false;
function getTelemetryEnabled() { return enabled; }

function registerEvents() {
  const events = {
    "startup": {
      methods: ["startup"],
      objects: ["webextension"],
      extra_keys: [],
      record_on_release: true,
    },
    "itemAdd": {
      methods: ["itemAdd"],
      objects: ["manager", "doorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "itemUpdate": {
      methods: ["itemUpdate"],
      objects: ["manager", "doorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "itemDelete": {
      methods: ["itemDelete"],
      objects: ["manager", "doorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "itemSelected": {
      methods: ["itemSelected"],
      objects: ["manager", "doorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "copyPassword": {
      methods: ["copyPassword"],
      objects: ["itemDetailManager", "itemDetailDoorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "copyUsername": {
      methods: ["copyUsername"],
      objects: ["itemDetailManager", "itemDetailDoorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "click": {
      methods: ["click"],
      objects: [
        "faq",
        "giveFeedback",
        "toolbar",
        "settingsMenu",
        "accountSettings",
        "getMobile",
        "signinSync",
        "sortMenu",
      ],
      extra_keys: [],
      record_on_release: true,
    },
    "show": {
      methods: ["show"],
      objects: [
        "newItem",
        "itemListManager",
        "itemListDoorhanger",
        "itemDetailManager",
        "itemDetailDoorhanger",
        "itemEdit",
        "deleteConfirm",
        "connectAnotherDevice",
      ],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "openWebsite": {
      methods: ["openWebsite"],
      objects: ["itemDetailManager", "itemDetailDoorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "concealPassword": {
      methods: ["concealPassword"],
      objects: ["itemDetailManager", "itemDetailDoorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
    "revealPassword": {
      methods: ["revealPassword"],
      objects: ["itemDetailManager", "itemDetailDoorhanger"],
      extra_keys: ["itemid"],
      record_on_release: true,
    },
  };
  try {
    browser.telemetry.registerEvents(TELEMETRY_CATEGORY, events);
  } catch (e) {
    if (e.message === "Attempt to register event that is already registered.") {
      // eslint-disable-next-line no-console
      console.log("Telemetry events already registered; skipping registration.");
    } else {
      throw e;
    }
  }
}

function registerScalars() {
  const scalars = {
    "loginCount": {
      kind: "count",
      keyed: false,
      record_on_release: true,
    },
    "loginsAccessed": {
      kind: "count",
      keyed: false,
      record_on_release: true,
    },
  };
  try {
    browser.telemetry.registerScalars(TELEMETRY_CATEGORY, scalars);
  } catch (e) {
    if (e.message === "Attempt to register scalar that is already registered.") {
      // eslint-disable-next-line no-console
      console.log("Telemetry scalars already registered; skipping registration.");
    } else {
      throw e;
    }
  }
}

async function recordEvent({ method, object, extra = null, value = null }) {
  let result;
  if (!enabled) {
    return result;
  }

  // Note: 'extra' objects must have string values. Replace null with empty
  // string, and convert numbers to strings.
  if (extra) {
    Object.keys(extra).forEach(key => {
      if (extra[key] === null) {
        extra[key] = "";
      }
      if (typeof extra[key] === "number") {
        extra[key] = extra[key].toString();
      }
    });
  }
  try {
    // Work around bug 1536877: use an embedded API experiment to submit
    // telemetry data for Firefox less than 68. This can be removed when
    // our users are at or past Firefox 68.
    const shouldUseEmbedded = await browser.experiments.temptelemetry.shouldUseEmbedded();
    if (shouldUseEmbedded) {
      result = await browser.experiments.temptelemetry.recordEvent(
        TELEMETRY_CATEGORY, method, object, value, extra);
    } else {
        result = await browser.telemetry.recordEvent(
          TELEMETRY_CATEGORY, method, object, value, extra);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`recordEvent threw on method ${method}, object ${object}, value ${value}, extra ${JSON.stringify(extra)}.`);
  }
  return result;
}

function scalarSet({ name, value }) {
  return enabled && browser.telemetry.scalarSet(`${TELEMETRY_CATEGORY}.${name}`, value);
}

function scalarAdd({ name, value }) {
  return enabled && browser.telemetry.scalarAdd(`${TELEMETRY_CATEGORY}.${name}`, value);
}

export function initializeTelemetry(force) {
  if (!enabled && !force) {
    return;
  }

  enabled = true;
  registerEvents();
  registerScalars();

  recordEvent({
    method: "startup",
    object: "webextension",
  });
}

const exported = { getTelemetryEnabled, recordEvent, scalarSet, scalarAdd };
export default exported;
