/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import mountWithL10n from "test/unit/mocks/l10n";
import { initialState } from "../manage/mock-redux-state";
import NoMatchingPlaceholder from "src/list/containers/no-matching-placeholder";

chai.use(chaiEnzyme());

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// TODO: figure out how to properly test with chai + enzyme + fluent + react overlays
//    so that openFAQ dispatching can be verified
describe("list > containers > <NoMatchingPlaceholder />", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ...initialState,
      list: {
        ...initialState.list,
        filter: {
          query: "filter",
          userEntered: true,
        },
      },
    });
  });

  it("renders with title", () => {
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <NoMatchingPlaceholder withTitle={true} />
      </Provider>
    );
    expect(wrapper.find("h2")).to.have.length(1);
    expect(wrapper.find("p")).to.have.length(2);
  });

  it("renders without title", () => {
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <NoMatchingPlaceholder withTitle={false} />
      </Provider>
    );
    expect(wrapper.find("h2")).to.have.length(0);
    expect(wrapper.find("p")).to.have.length(2);
  });
});
