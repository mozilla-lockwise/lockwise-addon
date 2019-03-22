/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinonChai from "sinon-chai";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import mountWithL10n from "test/unit/mocks/l10n";
import { initialState, filledState } from "../mock-redux-state";

chai.use(chaiEnzyme);
chai.use(sinonChai);

import { PromoteDeviceBanner, PromoteFxABanner } from "src/list/manage/components/promote-banner";
import ConnectedPromotionBanner from "src/list/manage/containers/connected-promote-banner";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <ConnectedPromotionBanner />", () => {
  describe("not signed in", () => {
    it("render", () => {
      const store = mockStore(initialState);
      const wrapper = mountWithL10n(
        <Provider store={store}>
          <ConnectedPromotionBanner />
        </Provider>
      );
      expect(wrapper).to.contain(PromoteFxABanner);
    });
  });

  describe("signed in", () => {
    it("render", () => {
      const state = { ...filledState };
      state.app.profileWrap = {
        ...state.app.profileWrap,
        hasProfile: true,
      };
      const store = mockStore(state);
      const wrapper = mountWithL10n(
        <Provider store={store}>
          <ConnectedPromotionBanner />
        </Provider>
      );
      expect(wrapper).to.contain(PromoteDeviceBanner);
    });
  });
});
