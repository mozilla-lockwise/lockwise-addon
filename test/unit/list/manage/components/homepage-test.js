/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { initialState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import Homepage from "src/list/manage/components/homepage";

chai.use(chaiEnzyme());

const middleware = {};
const mockStore = configureStore(middleware);

describe("list > manage > components > <Homepage/>", () => {
  it("render homepage with promotion banner", () => {
    const store = mockStore(initialState);
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <Homepage/>
      </Provider>
    );

    expect(wrapper.find("strong")).to.contain.text("tItLe");
  });
});
