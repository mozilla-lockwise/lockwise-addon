/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import "test/unit/mocks/browser";

import * as actions from "src/list/actions";
import openLinkMiddleware from "src/list/open-link-middleware";

chai.use(sinonChai);

describe("list > manage > open-link-middleware", () => {
  let store, next;
  let listener;

  beforeEach(async () => {
    store = {
      getState: sinon.stub(),
      dispatch: sinon.stub(),
    };
    next = sinon.stub();

    listener = sinon.spy();
    browser.runtime.onMessage.addListener(listener);
  });

  afterEach(async () => {
    browser.runtime.onMessage.removeListener(listener);
  });

  it("opens website when OPEN_FAQ is dispatched", async () => {
    openLinkMiddleware(store)(next)({
      type: actions.OPEN_FAQ,
    });
    expect(listener).to.have.been.calledWith({
      type: "open_site",
      url: "https://lockbox.firefox.com/faq.html",
    });
  });

  it("opens website when OPEN_FEEDBACK is dispatched", async () => {
    openLinkMiddleware(store)(next)({
      type: actions.OPEN_FEEDBACK,
    });
    expect(listener).to.have.been.calledWith({
      type: "open_site",
      url: "https://qsurvey.mozilla.com/s3/Lockbox-Input?ver=2.0.0-alpha",
    });
  });

  it("opens sync prefs page when OPEN_SYNC_PREFS is dispatched", async () => {
    const openPrefsSpy = sinon.spy(browser.experiments.sync, "openPreferences");
    openLinkMiddleware(store)(next)({
      type: actions.OPEN_SYNC_PREFS,
      id: "accountSettings",
    });
    expect(openPrefsSpy).to.have.been.calledWith("lockbox-addon");
    openPrefsSpy.restore();
  });

});
