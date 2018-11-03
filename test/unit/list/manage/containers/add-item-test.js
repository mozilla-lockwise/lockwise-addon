/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { initialState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import { startNewItem } from "src/list/actions";
import AddItem from "src/list/manage/containers/add-item";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <AddItem/>", () => {
  it("startNewItem() dispatched", () => {
    const store = mockStore(initialState);
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <AddItem/>
      </Provider>
    );
    wrapper.simulate("click");
    expect(store.getActions()).to.deep.equal([startNewItem()]);
  });

  it("disabled when editing an item", () => {
    const store = mockStore({
      ...initialState,
      editor: {
        ...initialState.editor,
        editing: true,
      },
    });
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <AddItem/>
      </Provider>
    );
    wrapper.simulate("click");
    expect(store.getActions()).to.deep.equal([]);
  });
});
