/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { initialState } from "./manage/mock-redux-state";
import * as actions from "src/list/actions";
import initializeMessagePorts from "src/list/message-ports";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > message ports", () => {
  let messagePort, store;

  beforeEach(() => {
    store = mockStore(initialState);
    browser.runtime.onConnect.addListener((port) => {
      messagePort = port;
    });
    initializeMessagePorts(store);
  });

  afterEach(() => {
    browser.runtime.onConnect.mockClearListener();
  });

  it('handle "added_item"', () => {
    const item = {
      id: "1",
      title: "title",
      entry: {
        kind: "login",
        username: "username",
        password: "password",
      },
    };
    messagePort.postMessage({type: "added_item", item});

    const dispatched = store.getActions();
    expect(store.getActions()).to.deep.equal([{
      type: actions.ADD_ITEM_COMPLETED,
      actionId: dispatched[0].actionId,
      item,
      interactive: false,
    }]);
  });

  it('handle "updated_item"', () => {
    const item = {
      id: "1",
      title: "title",
      entry: {
        kind: "login",
        username: "username",
        password: "password",
      },
    };
    messagePort.postMessage({type: "updated_item", item});

    const dispatched = store.getActions();
    expect(store.getActions()).to.deep.equal([{
      type: actions.UPDATE_ITEM_COMPLETED,
      actionId: dispatched[0].actionId,
      item,
      interactive: false,
    }]);
  });

  it('handle "removed_item"', () => {
    const id = "1";
    messagePort.postMessage({type: "removed_item", id});

    const dispatched = store.getActions();
    expect(store.getActions()).to.deep.equal([{
      type: actions.REMOVE_ITEM_COMPLETED,
      actionId: dispatched[0].actionId,
      id,
    }]);
  });

});
