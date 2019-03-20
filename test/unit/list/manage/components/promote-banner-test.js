/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(chaiEnzyme);
chai.use(sinonChai);

import mountWithL10n from "test/unit/mocks/l10n";
import { PromoteDeviceBanner, PromoteFxABanner } from "src/list/manage/components/promote-banner";

describe("list > manage > components > promotion banners", () => {
  describe("<PromoteDeviceBanner />", () => {
    let wrapper;
    let mockSendMessage;

    beforeEach(() => {
      wrapper = mountWithL10n(
        <PromoteDeviceBanner />
      );
      mockSendMessage = sinon.stub(browser.runtime, "sendMessage").resolves({});
    });

    afterEach(() => {
      mockSendMessage.restore();
    });

    it("calls openWebsite", () => {
      const button = wrapper.find("button");
      button.simulate("click");

      expect(mockSendMessage).to.have.been.calledWith({
        type: "open_site",
        url: "https://lockbox.firefox.com",
      });
    });
  });

  describe("<PromoteFxABanner />", () => {
    let wrapper;
    let mockOpenPrefs;

    beforeEach(() => {
      wrapper = mountWithL10n(
        <PromoteFxABanner />
      );
      mockOpenPrefs = sinon.stub(browser.experiments.sync, "openPreferences").resolves({});
    });

    afterEach(() => {
      mockOpenPrefs.restore();
    });

    it("calls openWebsite", () => {
      const button = wrapper.find("button");
      button.simulate("click");

      expect(mockOpenPrefs).to.have.been.calledWith("lockbox-addon");
    });
  });
});
