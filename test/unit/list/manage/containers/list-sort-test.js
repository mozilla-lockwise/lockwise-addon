/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { filledState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import { SORT_BY_NAME, SORT_BY_LAST_USED, SORT_BY_LAST_CHANGED } from "src/list/actions";
import ListSort from "src/list/manage/containers/list-sort";

chai.use(chaiEnzyme());

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <ListSort />", () => {
  it("onChange() dispatches correct sort action", () => {
    const store = mockStore(filledState);
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <ListSort />
      </Provider>
    );

    wrapper.find("select").simulate("change", {target: {value: "last-used"}});
    expect(store.getActions()[0]).to.deep.include({
      type: SORT_BY_LAST_USED,
    });

    wrapper.find("select").simulate("change", {target: {value: "last-changed"}});
    expect(store.getActions()[1]).to.deep.include({
      type: SORT_BY_LAST_CHANGED,
    });

    wrapper.find("select").simulate("change", {target: {value: "name"}});
    expect(store.getActions()[2]).to.deep.include({
      type: SORT_BY_NAME,
    });
  });
});
