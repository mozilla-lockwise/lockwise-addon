/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import mountWithL10n from "test/unit/mocks/l10n";
import { initialState, filledState } from "../mock-redux-state";
import * as actions from "src/list/actions";
import ItemListPanel from
       "src/list/popup/components/item-list-panel";
import ItemDetailsPanel from
       "src/list/popup/components/item-details-panel";
import CurrentSelection from
       "src/list/popup/containers/current-selection";

chai.use(chaiEnzyme());

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > popup > containers > <CurrentSelection/>", () => {
  beforeEach(() => {
    browser.runtime.onMessage.addListener(() => ({}));
  });

  afterEach(() => {
    browser.runtime.onMessage.mockClearListener();
  });

  describe("nothing selected", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render list panel", () => {
      expect(wrapper).to.contain(ItemListPanel);
    });
  });

  describe("item selected", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(filledState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render details panel", () => {
      expect(wrapper).to.contain(ItemDetailsPanel);
    });

    it("selectItem(null) dispatched", () => {
      wrapper.findWhere((x) => x.prop("id") === "item-details-panel-title")
             .find("button").simulate("click");
      expect(store.getActions()[0]).to.deep.include({
        type: actions.SELECT_ITEM_STARTING,
        id: null,
      });
    });
  });
});
