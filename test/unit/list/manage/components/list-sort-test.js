/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { Localized } from "fluent-react";
import React from "react";

import sinon from "sinon";
import sinonChai from "sinon-chai";

import mountWithL10n from "test/unit/mocks/l10n";
import ListSort from "src/list/manage/components/list-sort";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > manage > components > <ListSort />", () => {

  describe("empty state behavior", () => {
    it("is disabled upstream if the list is empty", () => {
      const onChange = sinon.spy();
      const wrapper = mountWithL10n(
        <ListSort onChange={onChange} value="name" sort="name" disabled={true} />
      );
      expect(wrapper.state().value).to.equal("name");
      expect(wrapper.state().selectTitle).to.equal("nAMe");
      expect(wrapper.find("select").prop("disabled")).to.be.true;
    });
  });

  describe("filled state", () => {
    let onChange, wrapper;

    beforeEach(() => {
      onChange = sinon.spy();
      wrapper = mountWithL10n(
        <ListSort onChange={onChange} value="name" sort="name" disabled={false} />
      );
    });

    it("render filled", () => {
      expect(wrapper.state().value).to.equal("name");
      expect(wrapper.find("select")).to.have.prop(
        "disabled", false
      );
      expect(wrapper.find(Localized).at(0)).to.have.prop(
        "id", "sort-by"
      );
      expect(wrapper.find(Localized).at(1)).to.have.prop(
        "id", "sort-by-name"
      );
    });

    it("updates sort value and title on select change", () => {
      wrapper.find("select").simulate("change", {
        target: {
          value: "last-used",
          selectedIndex: 1,
          options: [
            { value: "name", text: "nAMe" },
            { value: "last-used", text: "lASt uSEd" },
            { value: "last-changed", text: "lASt cHANGEd" },
          ],
        },
      });
      expect(onChange).to.have.callCount(1);
      expect(wrapper.state().value).to.equal("last-used");
    });
  });
});
