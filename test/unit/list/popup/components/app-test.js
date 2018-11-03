/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { initialState, filledState } from "../mock-redux-state";
import chaiFocus from "test/unit/chai-focus";
import mountWithL10n, { mountWithL10nIntoDOM } from "test/unit/mocks/l10n";
import App from "src/list/popup/components/app";
import CurrentSelection from
       "src/list/popup/containers/current-selection";

chai.use(chaiEnzyme());
chai.use(chaiFocus);

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("list > popup > components > <App/>", () => {
  it("render app", () => {
    const store = mockStore(initialState);
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <App/>
      </Provider>
    );

    expect(wrapper).to.have.descendants(CurrentSelection);
  });

  it("filter input focused/selected", () => {
    const store = mockStore({
      ...filledState,
      cache: {
        ...filledState.cache,
        currentItem: null,
      },
      list: {
        ...filledState.list,
        selectedItemid: null,
        filter: {
          query: "filter",
          userEntered: false,
        },
      },
    });
    const wrapper = mountWithL10nIntoDOM(
      <Provider store={store}>
        <App/>
      </Provider>
    );

    expect(wrapper.find("input")).to.be.focused();
    expect(wrapper.find("input")).to.have.selection();
  });
});
