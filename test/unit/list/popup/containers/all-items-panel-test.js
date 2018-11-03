/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { initialState, filledState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import { SELECT_ITEM_STARTING } from "src/list/actions";
import ItemSummary from "src/list/components/item-summary";
import AllItemsPanel from
       "src/list/popup/containers/all-items-panel";

chai.use(chaiEnzyme());

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > popup > containers > <AllItemsPanel/>", () => {
  beforeEach(() => {
    browser.runtime.onMessage.addListener(() => ({}));
  });

  afterEach(() => {
    browser.runtime.onMessage.mockClearListener();
  });

  describe("empty state", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <AllItemsPanel/>
        </Provider>
      );
    });

    it("render items", () => {
      expect(wrapper.find(ItemSummary)).to.have.length(0);
    });
  });

  describe("filled state", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore({...filledState, list: {
        ...filledState.list, selectedItemid: null,
      }});
      wrapper = mountWithL10n(
        <Provider store={store}>
          <AllItemsPanel/>
        </Provider>
      );
    });

    it("render items", () => {
      expect(wrapper.find(ItemSummary)).to.have.length(3);
      wrapper.find(ItemSummary).forEach((i) => {
        expect(i).to.have.prop("verbose", false);
      });
    });

    it("selectItem() dispatched", () => {
      wrapper.find(ItemSummary).at(0).simulate("mousedown", {button: 0});
      expect(store.getActions()[0].type).to.equal(SELECT_ITEM_STARTING);
    });
  });

  describe("filled state (with filters)", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore({
        ...filledState,
        list: {
          ...filledState.list,
          filter: {
            query: "2",
            userEntered: true,
          },
        },
      });
      wrapper = mountWithL10n(
        <Provider store={store}>
          <AllItemsPanel/>
        </Provider>
      );
    });

    it("render items", () => {
      expect(wrapper.find(ItemSummary)).to.have.length(1);
      expect(wrapper.find(ItemSummary)).to.have.prop("verbose", true);
    });
  });
});
