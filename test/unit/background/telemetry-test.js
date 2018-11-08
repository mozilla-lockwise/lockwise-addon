/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import telemetry, { initializeTelemetry } from "src/background/telemetry";

chai.use(sinonChai);

describe("background > telemetry", () => {
  let spyEvents, spyScalars, spyRecordEvent, spyRecordScalar;

  beforeEach(async () => {
    spyEvents = sinon.spy(browser.telemetry, "registerEvents");
    spyRecordEvent = sinon.spy(browser.telemetry, "recordEvent");
    spyScalars = sinon.spy(browser.telemetry, "registerScalars");
    spyRecordScalar = sinon.spy(browser.telemetry, "scalarSet");
  });
  afterEach(async () => {
    spyRecordScalar.restore();
    spyRecordEvent.restore();
    spyScalars.restore();
    spyEvents.restore();
  });

  it("registers for telemetry", () => {
    initializeTelemetry();
    expect(spyEvents).to.have.been.calledWith("lockboxv1", {
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
    expect(spyScalars).to.have.been.calledWith("lockboxv1", {
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

  it("records event", async () => {
    telemetry.recordEvent("some_method", "some_object", { extra: "value" });
    expect(spyRecordEvent).to.have.been.calledWith("lockboxv1", "some_method", "some_object", null, { extra: "value" });
  });
  it("records a scalar", async () => {
    telemetry.scalarSet("some_name", 42);
    expect(spyRecordScalar).to.have.been.calledWith("lockboxv1.some_name", 42);
  });
});
