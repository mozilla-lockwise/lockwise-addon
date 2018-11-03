/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import { initialState } from "../mock-redux-state";
import mountWithL10n from "test/unit/mocks/l10n";
import { OPEN_FAQ } from "src/list/actions";
import OpenFAQ from
       "src/list/manage/containers/open-faq";

chai.use(sinonChai);

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <OpenFAQ/>", () => {
  it("FAQ link opened", () => {
    const windowOpen = sinon.stub(window, "open");
    const store = mockStore(initialState);
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <OpenFAQ/>
      </Provider>
    );

    wrapper.simulate("click");
    expect(windowOpen).to.have.callCount(1);
    expect(store.getActions()).to.deep.equal([{
      type: OPEN_FAQ,
    }]);
    windowOpen.restore();
  });
});
