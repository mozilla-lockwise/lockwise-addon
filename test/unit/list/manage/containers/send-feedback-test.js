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
import { SEND_FEEDBACK } from "src/list/actions";
import SendFeedback from
       "src/list/manage/containers/send-feedback";

chai.use(sinonChai);

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <SendFeedback/>", () => {
  it("feedback link opened", () => {
    const windowOpen = sinon.stub(window, "open");
    const store = mockStore(initialState);
    const wrapper = mountWithL10n(
      <Provider store={store}>
        <SendFeedback/>
      </Provider>
    );

    wrapper.simulate("click");
    expect(windowOpen).to.have.callCount(1);
    expect(store.getActions()).to.deep.equal([{
      type: SEND_FEEDBACK,
    }]);
    windowOpen.restore();
  });
});
