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
    it("calls openWebsite", () => {
      let mockOnAction = sinon.stub();
      let mockOnClose = sinon.stub();
      let wrapper = mountWithL10n(
        <PromoteDeviceBanner onAction={mockOnAction} onClose={mockOnClose} />
      );

      const button = wrapper.find("p button");
      button.simulate("click");

      expect(mockOnAction).to.have.been.called;
    });
  });

  describe("<PromoteFxABanner />", () => {
    it("calls openWebsite", () => {

      let mockOnAction = sinon.stub();
      let mockOnClose = sinon.stub();
      let wrapper = mountWithL10n(
        <PromoteFxABanner onAction={mockOnAction} onClose={mockOnClose} />
      );

      const button = wrapper.find("p button");
      button.simulate("click");

      expect(mockOnAction).to.have.been.called;
    });
  });
});
