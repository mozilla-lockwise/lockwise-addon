/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import { SELECT_ITEM_COMPLETED, COPIED_FIELD } from "src/list/actions";
import telemetryLogger from "src/list/popup/telemetry";

chai.use(sinonChai);

describe("list > popup > telemetryLogger middleware", () => {
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

  it("record telemetry for a selected item", async () => {
    const item = {
      id: "b9cf5fb1-913d-4ef9-a1ff-afe39a66f660",
      title: "origin.com",
      origins: [ "https://origin.com" ],
      entry: {
        kind: "login",
        username: "username",
        password: "password",
      },
    };
    telemetryLogger(store)(next)({
      type: SELECT_ITEM_COMPLETED,
      actionId: 0,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemSelected",
      object: "doorhanger",
      extra: {
        itemid: item.id,
      },
    });
  });

  it("record telemetry for a copied field", async () => {
    telemetryLogger(store)(next)({
      type: COPIED_FIELD,
      field: "username",
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "usernameCopied",
      object: "doorhanger",
      extra: undefined,
    });
  });
});
