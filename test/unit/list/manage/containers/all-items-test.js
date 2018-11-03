/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { Localized } from "fluent-react";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { initialState, filledState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import { SELECT_ITEM_STARTING } from "src/list/actions";
import { NEW_ITEM_ID } from "src/list/common";
import { ItemListPlaceholder } from
       "src/list/components/item-list";
import ItemSummary from "src/list/components/item-summary";
import AllItems from "src/list/manage/containers/all-items";

chai.use(chaiEnzyme());

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <AllItems/>", () => {
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
          <AllItems/>
        </Provider>
      );
    });

    it("render items", () => {
      expect(wrapper.find(ItemSummary)).to.have.length(0);
      expect(wrapper.find(ItemListPlaceholder)).to.have.text(
        "wHEn yOu cREATe an eNTRy..."
      );
    });
  });

  describe("filled state", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(filledState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <AllItems/>
        </Provider>
      );
    });

    it("render items", () => {
      const expectedTitle = filledState.cache.currentItem.title;
      expect(wrapper.find(ItemSummary)).to.have.length(3);
      expect(wrapper.find("li").filterWhere(
        (x) => x.prop("data-selected")
      ).find(ItemSummary).prop("title")).to.equal(expectedTitle);
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
          <AllItems/>
        </Provider>
      );
    });

    it("render items", () => {
      expect(wrapper.find(ItemSummary)).to.have.length(1);
    });
  });

  describe("new item placeholder", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore({
        ...initialState,
        list: {
          ...initialState.list,
          selectedItemId: NEW_ITEM_ID,
        },
      });
      wrapper = mountWithL10n(
        <Provider store={store}>
          <AllItems/>
        </Provider>
      );
    });

    it("render items", () => {
      const item = wrapper.find(ItemSummary);
      expect(item).to.have.length(1);
      expect(item.find(Localized).at(0)).to.have.prop(
        "id", "item-summary-new-title"
      );
    });
  });
});
