/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const TELEMETRY_CATEGORY = "lockboxv1";

export default function initializeTelemetry() {
  try {
    browser.telemetry.registerEvents(TELEMETRY_CATEGORY, {
      "startup": {
        methods: ["startup"],
        objects: ["addon", "webextension"],
      },
      "iconClick": {
        methods: ["iconClick"],
        objects: ["toolbar"],
      },
      "displayView": {
        methods: ["render"],
        objects: ["manage", "doorhanger"],
      },
      "itemAdding": {
        methods: ["itemAdding"],
        objects: ["manage"],
      },
      "itemUpdating": {
        methods: ["itemUpdating"],
        objects: ["manage"],
      },
      "itemDeleting": {
        methods: ["itemDeleting"],
        objects: ["manage"],
      },
      "itemAdded": {
        methods: ["itemAdded"],
        objects: ["manage"],
        extra_keys: ["itemid"],
      },
      "itemUpdated": {
        methods: ["itemUpdated"],
        objects: ["manage"],
        extra_keys: ["itemid"],
      },
      "itemDeleted": {
        methods: ["itemDeleted"],
        objects: ["manage"],
        extra_keys: ["itemid"],
      },
      "itemSelected": {
        methods: ["itemSelected"],
        objects: ["manage", "doorhanger"],
      },
      "addClick": {
        methods: ["addClick"],
        objects: ["manage"],
      },
      "datastore": {
        methods: ["added", "updated", "deleted"],
        objects: ["datastore"],
        extra_keys: ["itemid", "fields"],
      },
      "feedback": {
        methods: ["feedbackClick"],
        objects: ["manage"],
      },
      "faq": {
        methods: ["faqClick"],
        objects: ["manage"],
      },
      "itemCopied": {
        methods: ["usernameCopied", "passwordCopied"],
        objects: ["manage", "doorhanger"],
      },
    });
  } catch (e) {
    if (e.message === "Attempt to register event that is already registered.") {
      // eslint-disable-next-line no-console
      console.log("telemetry events already registered; skipping registration");
    } else {
      throw e;
    }
  }

  try {
    browser.telemetry.registerScalars(TELEMETRY_CATEGORY, {
      "datastoreCount": {
        kind: "count",
        keyed: false,
        record_on_release: false,
        expired: false,
      },
    });
  } catch (e) {
    if (e.message === "Attempt to register scalar that is already registered.") {
      // eslint-disable-next-line no-console
      console.log("telemetry scalar already registered; skipping registration");
    } else {
      throw e;
    }
  }
}
