/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import { initialState, filledState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import ItemSummary from "src/list/components/item-summary";
import { ItemListPlaceholder } from
       "src/list/components/item-list";
import ItemFilter from "src/list/containers/item-filter";
import ItemListPanel from
       "src/list/popup/components/item-list-panel";
import { PanelBanner } from "src/widgets/panel";

chai.use(chaiEnzyme());
chai.use(sinonChai);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > popup > components > <ItemListPanel/>", () => {
  let onMessage;

  beforeEach(() => {
    browser.runtime.onMessage.addListener(onMessage = sinon.stub().returns({}));
    sinon.stub(window, "close");
  });

  afterEach(() => {
    browser.runtime.onMessage.mockClearListener();
    window.close.restore();
  });

  describe("empty state", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <ItemListPanel items={[]}/>
        </Provider>
      );
    });

    it("render panel", () => {
      expect(wrapper).to.have.descendants(ItemFilter);
      expect(wrapper.find(ItemSummary)).to.have.length(0);
      expect(wrapper).to.have.descendants(ItemListPlaceholder);
      expect(wrapper).not.to.have.descendants(PanelBanner);
    });

    it("open manager", () => {
      wrapper.findWhere((x) => x.prop("id") === "manage-lockbox-button")
             .find("button").simulate("click");
      expect(onMessage).to.have.been.calledWith({
        type: "open_view",
        name: "manage",
      });
      expect(window.close).to.have.callCount(1);
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
          <ItemListPanel items={filledState.cache.items}/>
        </Provider>
      );
    });

    it("render panel", () => {
      expect(wrapper).to.have.descendants(ItemFilter);
      expect(wrapper.find(ItemSummary)).to.have.length(3);
      expect(wrapper).not.to.have.descendants(PanelBanner);
    });
  });

  describe("filled state, no results banner", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore({...filledState, list: {
        ...filledState.list, selectedItemid: null,
      }});
      wrapper = mountWithL10n(
        <Provider store={store}>
          <ItemListPanel items={filledState.cache.items} noResultsBanner/>
        </Provider>
      );
    });

    it("render panel", () => {
      expect(wrapper).to.have.descendants(ItemFilter);
      expect(wrapper.find(ItemSummary)).to.have.length(3);
      expect(wrapper).to.have.descendants(PanelBanner);
    });
  });
});
