/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import * as actions from "src/list/actions";
import telemetryLogger from "src/list/popup/telemetry";
import telemetry from "src/list/telemetry";

chai.use(sinonChai);

describe("list > popup > telemetryLogger middleware", () => {
  let store, next;
  let listener;
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

  it("record telemetry for concealing a revealed password", async () => {
    const passwordConcealed = sinon.spy(telemetry, "passwordConcealed");
    const action = {
      type: actions.CONCEAL_PASSWORD,
      id: item.id,
    };
    telemetryLogger(store)(next)(action);
    expect(passwordConcealed).to.have.been.calledWith(action, "itemDetailDoorhanger");
    passwordConcealed.restore();
  });

  it("record telemetry for a copied field", async () => {
    const itemCopied = sinon.spy(telemetry, "itemCopied");
    const action = {
      type: actions.COPIED_FIELD_COMPLETED,
      field: "username",
      actionId: item.id,
      item,
    };
    telemetryLogger(store)(next)(action);
    expect(itemCopied).to.have.been.calledWith(action, "itemDetailDoorhanger");
    itemCopied.restore();
  });

  it("record telemetry for showing a non-empty list of items", () => {
    const listShown = sinon.spy(telemetry, "listShown");
    store.getState = sinon.stub().returns({
      list: {
        selectedItemId: item.id,
      },
      cache: {
        items: [item],
      },
    });
    const action = {
      type: actions.LIST_ITEMS_COMPLETED,
    };
    telemetryLogger(store)(next)(action);
    expect(listShown).to.have.been.calledWith(action, "itemListDoorhanger", [item]);
    listShown.restore();
  });

  it("record telemetry for opening a website", async () => {
    const websiteOpened = sinon.spy(telemetry, "websiteOpened");
    const action = {
      type: actions.OPEN_WEBSITE,
      item,
    };
    telemetryLogger(store)(next)(action);
    expect(websiteOpened).to.have.been.calledWith(action, "itemDetailDoorhanger");
    websiteOpened.restore();
  });

  it("record telemetry for revealing a password", async () => {
    const passwordRevealed = sinon.spy(telemetry, "passwordRevealed");
    const action = {
      type: actions.REVEAL_PASSWORD,
      id: item.id,
    };
    telemetryLogger(store)(next)(action);
    expect(passwordRevealed).to.have.been.calledWith(action, "itemDetailDoorhanger");
    passwordRevealed.restore();
  });

  it("record telemetry for a selected item", async () => {
    const itemSelected = sinon.spy(telemetry, "itemSelected");
    const action = {
      type: actions.SELECT_ITEM_STARTING,
      item,
    };
    telemetryLogger(store)(next)(action);
    expect(itemSelected).to.have.been.calledWith(action, "doorhanger");
    itemSelected.restore();
  });

  it("record telemetry for a shown item", async () => {
    const itemShown = sinon.spy(telemetry, "itemShown");
    const action = {
      type: actions.SELECT_ITEM_COMPLETED,
      actionId: 0,
      item,
    };
    telemetryLogger(store)(next)(action);
    expect(itemShown).to.have.been.calledWith(action, "itemDetailDoorhanger");
    itemShown.restore();
  });
});
