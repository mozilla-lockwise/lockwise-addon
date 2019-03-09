/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import * as actions from "src/list/actions";
import telemetryLogger from "src/list/manage/telemetry";

chai.use(sinonChai);

describe("list > manage > telemetryLogger middleware", () => {
  const item = {
    id: "b9cf5fb1-913d-4ef9-a1ff-afe39a66f660",
    title: "origin.com",
    origins: ["https://origin.com"],
    entry: {
      kind: "login",
      username: "username",
      password: "password",
    },
  };
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

  it("record telemetry for starting to add item", async () => {
    telemetryLogger(store)(next)({
      type: actions.ADD_ITEM_STARTING,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemAdding",
      object: "manage",
      extra: undefined,
    });
  });
  it("record telemetry for starting to update item", async () => {
    telemetryLogger(store)(next)({
      type: actions.UPDATE_ITEM_STARTING,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemUpdating",
      object: "manage",
      extra: undefined,
    });
  });
  it("record telemetry for starting to remove item", async () => {
    telemetryLogger(store)(next)({
      type: actions.REMOVE_ITEM_STARTING,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemDeleting",
      object: "manage",
      extra: undefined,
    });
  });

  it("record telemetry for completing add item", async () => {
    telemetryLogger(store)(next)({
      type: actions.ADD_ITEM_COMPLETED,
      interactive: true,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemAdded",
      object: "manage",
      extra: { itemid: item.id },
    });
  });
  it("record telemetry for completing update item", async () => {
    telemetryLogger(store)(next)({
      type: actions.UPDATE_ITEM_COMPLETED,
      interactive: true,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemUpdated",
      object: "manage",
      extra: { itemid: item.id },
    });
  });
  it("record telemetry for completing remove item", async () => {
    telemetryLogger(store)(next)({
      type: actions.REMOVE_ITEM_COMPLETED,
      interactive: true,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemDeleted",
      object: "manage",
      extra: { itemid: item.id },
    });
  });

  it("record telemetry for a selected item", async () => {
    telemetryLogger(store)(next)({
      type: actions.SELECT_ITEM_COMPLETED,
      actionId: 0,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "itemSelected",
      object: "manage",
      extra: {
        itemid: item.id,
      },
    });
  });

  it("record telemetry for a copied field", async () => {
    telemetryLogger(store)(next)({
      type: actions.COPIED_FIELD_COMPLETED,
      field: "username",
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "usernameCopied",
      object: "manage",
      extra: undefined,
    });
  });

  it("doesn't record telemetry for completing add item non-interactive", async () => {
    telemetryLogger(store)(next)({
      type: actions.ADD_ITEM_COMPLETED,
      item,
    });
    expect(listener).to.not.have.been.called;
  });
  it("don't record telemetry for completing update item non-interactive", async () => {
    telemetryLogger(store)(next)({
      type: actions.UPDATE_ITEM_COMPLETED,
      item,
    });
    expect(listener).to.not.have.been.called;
  });
  it("don't record telemetry for completing remove item non-interactive", async () => {
    telemetryLogger(store)(next)({
      type: actions.REMOVE_ITEM_COMPLETED,
      item,
    });
    expect(listener).to.not.have.been.called;
  });

  it("record telemetry for starting a new item", async () => {
    telemetryLogger(store)(next)({
      type: actions.START_NEW_ITEM,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      method: "addClick",
      object: "manage",
      extra: undefined,
    });
  });
  it("don't record telemetry for a selected item missing", async () => {
    telemetryLogger(store)(next)({
      type: actions.SELECT_ITEM_COMPLETED,
      actionId: 0,
    });
    expect(listener).to.not.have.been.called;
  });
});
