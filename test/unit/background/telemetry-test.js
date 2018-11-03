/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";

import initializeTelemetry from "src/background/telemetry";

describe("background > telemetry", () => {
  it("registers for telemetry", () => {
    initializeTelemetry();
    expect(browser.telemetry._events).to.have.property("lockboxv1").deep.equal({
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
    expect(browser.telemetry._scalars).to.have.property("lockboxv1").deep.equal({
      "datastoreCount": {
        kind: "count",
        keyed: false,
        record_on_release: false,
        expired: false,
      },
    });

    let caught = false;
    try {
      initializeTelemetry();
    } catch (e) {
      caught = true;
    }
    expect(caught).to.be.false;
  });
});
