/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import * as actions from "src/list/actions";
import telemetryLogger from "src/list/manage/telemetry";
import telemetry from "src/list/telemetry";

chai.use(sinonChai);

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

describe("list > manage > telemetryLogger middleware", () => {
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

  // Note: cases are alphabetized by the action.

  it("record telemetry for completing add item", async () => {
    telemetryLogger(store)(next)({
      type: actions.ADD_ITEM_COMPLETED,
      interactive: true,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "itemAdd",
        object: "manager",
        extra: { itemid: item.id },
        value: null,
      },
    });
  });

  it("doesn't record telemetry for completing add item non-interactive", async () => {
    telemetryLogger(store)(next)({
      type: actions.ADD_ITEM_COMPLETED,
      item,
    });
    expect(listener).to.not.have.been.called;
  });

  it("record telemetry for concealing a revealed password", async () => {
    const passwordConcealed = sinon.spy(telemetry, "passwordConcealed");
    const action = {
      type: actions.CONCEAL_PASSWORD,
      id: item.id,
    };
    telemetryLogger(store)(next)(action);
    expect(passwordConcealed).to.have.been.calledWith(action, "itemDetailManager");
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
    expect(itemCopied).to.have.been.calledWith(action, "itemDetailManager");
    itemCopied.restore();
  });

  it("record telemetry for showing the item edit view", (done) => {
    store.getState = sinon.stub().returns({ list: { selectedItemId: item.id }});
    telemetryLogger(store)(next)({
      type: actions.EDIT_CURRENT_ITEM,
    });
    // Wait a turn for the listener to be called.
    setTimeout(() => {
      expect(listener).to.have.been.calledWith({
        type: "telemetry_event",
        data: {
          method: "show",
          object: "itemEdit",
          extra: { itemid: item.id },
          value: null,
        },
      });
      done();
    }, 0);
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
    // Wait a turn for the listener to be called.
    setTimeout(() => {
      expect(listShown).to.have.been.calledWith(action, "itemListManager", [item]);
      listShown.restore();
    }, 0);
  });

  it("record telemetry for clicking the iOS app store link", async () => {
    telemetryLogger(store)(next)({
      type: actions.OPEN_APP_STORE,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "openAppStore",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking the FAQ link", async () => {
    telemetryLogger(store)(next)({
      type: actions.OPEN_FAQ,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "faq",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking the feedback link", async () => {
    telemetryLogger(store)(next)({
      type: actions.OPEN_FEEDBACK,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "giveFeedback",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking the get mobile link", async () => {
    telemetryLogger(store)(next)({
      type: actions.OPEN_HOMEPAGE,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "getMobile",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking the Google play store link", async () => {
    telemetryLogger(store)(next)({
      type: actions.OPEN_PLAY_STORE,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "openPlayStore",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking the account sign in link", async () => {
    telemetryLogger(store)(next)({
      type: actions.OPEN_SYNC_PREFS,
      id: "accountSettings",
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "accountSettings",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking the website link in a details view", async () => {
    const websiteOpened = sinon.spy(telemetry, "websiteOpened");
    const action = {
      type: actions.OPEN_WEBSITE,
      item,
    };
    telemetryLogger(store)(next)(action);
    expect(websiteOpened).to.have.been.calledWith(action, "itemDetailManager");
    websiteOpened.restore();
  });

  it("record telemetry for completing remove item", async () => {
    telemetryLogger(store)(next)({
      type: actions.REMOVE_ITEM_COMPLETED,
      interactive: true,
      item,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "itemDelete",
        object: "manager",
        extra: { itemid: item.id },
        value: null,
      },
    });
  });

  it("don't record telemetry for completing remove item non-interactive", async () => {
    telemetryLogger(store)(next)({
      type: actions.REMOVE_ITEM_COMPLETED,
      item,
    });
    expect(listener).to.not.have.been.called;
  });

  it("record telemetry for revealing a password", async () => {
    const passwordRevealed = sinon.spy(telemetry, "passwordRevealed");
    const action = {
      type: actions.REVEAL_PASSWORD,
      id: item.id,
    };
    telemetryLogger(store)(next)(action);
    expect(passwordRevealed).to.have.been.calledWith(action, "itemDetailManager");
    passwordRevealed.restore();
  });

  it("record telemetry for a selected item", async () => {
    const itemSelected = sinon.spy(telemetry, "itemSelected");
    const action = {
      type: actions.SELECT_ITEM_STARTING,
      item,
    };
    telemetryLogger(store)(next)(action);
    expect(itemSelected).to.have.been.calledWith(action, "manager");
    itemSelected.restore();
  });

  it("don't record telemetry for a selected item missing", async () => {
    const itemSelected = sinon.spy(telemetry, "itemSelected");
    const action = {
      type: actions.SELECT_ITEM_STARTING,
    };
    telemetryLogger(store)(next)(action);
    expect(itemSelected).to.not.have.been.called;
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
    expect(itemShown).to.have.been.calledWith(action, "itemDetailManager");
    itemShown.restore();
  });

  it("record telemetry for showing the delete confirm modal", async () => {
    store.getState = sinon.stub().returns({ list: { selectedItemId: item.id }});
    telemetryLogger(store)(next)({
      type: actions.SHOW_MODAL,
      id: "delete",
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "show",
        object: "deleteConfirm",
        extra: { itemid: item.id },
        value: null,
      },
    });
  });

  it("record telemetry for showing the profile menu", async () => {
    telemetryLogger(store)(next)({
      type: actions.SHOW_PROFILE_MENU,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "settingsMenu",
        value: null,
        extra: null,
      },
    });
  });

  it("record telemetry for clicking UI to sort by last changed", async () => {
    telemetryLogger(store)(next)({
      type: actions.SORT_BY_LAST_CHANGED,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "sortMenu",
        value: "lastChanged",
        extra: null,
      },
    });
  });

  it("record telemetry for clicking UI to sort by last used", async () => {
    telemetryLogger(store)(next)({
      type: actions.SORT_BY_LAST_USED,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "sortMenu",
        value: "lastUsed",
        extra: null,
      },
    });
  });

  it("record telemetry for clicking UI to sort by name", async () => {
    telemetryLogger(store)(next)({
      type: actions.SORT_BY_NAME,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "click",
        object: "sortMenu",
        value: "name",
        extra: null,
      },
    });
  });

  it("record telemetry for starting a new item", async () => {
    telemetryLogger(store)(next)({
      type: actions.START_NEW_ITEM,
    });
    expect(listener).to.have.been.calledWith({
      type: "telemetry_event",
      data: {
        method: "show",
        object: "newItem",
        extra: null,
        value: null,
      },
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
      data: {
        method: "itemUpdate",
        object: "manager",
        extra: { itemid: item.id },
        value: null,
      },
    });
  });

  it("don't record telemetry for completing update item non-interactive", async () => {
    telemetryLogger(store)(next)({
      type: actions.UPDATE_ITEM_COMPLETED,
      item,
    });
    expect(listener).to.not.have.been.called;
  });
});
