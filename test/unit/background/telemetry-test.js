/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import telemetry, { initializeTelemetry } from "src/background/telemetry";

chai.use(sinonChai);

describe("background > telemetry", () => {
  let spyEvents, spyScalars, spyRecordEvent, spyRecordScalar, spyEmbeddedRecordEvent, mockShouldUseEmbedded;

  beforeEach(async () => {
    spyEvents = sinon.spy(browser.telemetry, "registerEvents");
    spyRecordEvent = sinon.spy(browser.telemetry, "recordEvent");
    spyScalars = sinon.spy(browser.telemetry, "registerScalars");
    spyRecordScalar = sinon.spy(browser.telemetry, "scalarSet");
    spyEmbeddedRecordEvent = sinon.spy(browser.experiments.temptelemetry, "recordEvent");
  });
  afterEach(async () => {
    spyEvents.restore();

    spyRecordEvent.restore();

    spyScalars.restore();
    spyRecordScalar.restore();

    spyEmbeddedRecordEvent.restore();
  });

  it("does not register for telemetry unless forced", () => {
    initializeTelemetry();
    expect(spyEvents).to.not.have.been.called;
    expect(spyScalars).to.not.have.been.called;
  });
  it("registers for telemetry", () => {
    initializeTelemetry(true);
    expect(spyEvents).to.have.been.calledWith("lockboxv1", {
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
    });
    expect(spyScalars).to.have.been.calledWith("lockboxv1", {
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
    });

    let caught = false;
    try {
      initializeTelemetry(true);
    } catch (e) {
      caught = true;
    }
    expect(caught).to.be.false;
  });

  describe("recordEvent and embedded recordEvent shim", () => {
    it("records event using embedded recordEvent", async () => {
      mockShouldUseEmbedded = sinon.stub(browser.experiments.temptelemetry, "shouldUseEmbedded")
        .resolves(true);
      await telemetry.recordEvent({
        method: "method",
        object: "object",
        extra: { extra: "extra" },
        value: null,
      });
      expect(mockShouldUseEmbedded).to.have.been.called;
      expect(spyRecordEvent).to.not.have.been.called;
      expect(spyEmbeddedRecordEvent).to.have.been.calledWith("lockboxv1", "method", "object", null, { extra: "extra" });
      mockShouldUseEmbedded.restore();
    });
    it("records event using native recordEvent", async () => {
      mockShouldUseEmbedded = sinon.stub(browser.experiments.temptelemetry, "shouldUseEmbedded")
        .resolves(false);
      await telemetry.recordEvent({
        method: "method",
        object: "object",
        extra: { extra: "extra" },
        value: null,
      });
      expect(mockShouldUseEmbedded).to.have.been.called;
      expect(spyEmbeddedRecordEvent).to.not.have.been.called;
      expect(spyRecordEvent).to.have.been.calledWith("lockboxv1", "method", "object", null, { extra: "extra" });
      mockShouldUseEmbedded.restore();
    });
  });

  // TODO: why does this not fail?
  describe("embedded recordEvent avoids value integer type bug", () => {
    it("throws if an integer 'value' is passed, avoiding lost pings", async () => {
      mockShouldUseEmbedded = sinon.stub(browser.experiments.temptelemetry, "shouldUseEmbedded")
        .resolves(true);
      telemetry.recordEvent({
        method: "method",
        object: "object",
        extra: { extra: "extra" },
        value: 123,
      });
      mockShouldUseEmbedded.restore();
    });
  });

  it("records a scalar", async () => {
    telemetry.scalarSet({
      name: "some_name",
      value: 42,
    });
    expect(spyRecordScalar).to.have.been.calledWith("lockboxv1.some_name", 42);
  });
});
