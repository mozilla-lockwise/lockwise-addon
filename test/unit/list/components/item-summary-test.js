/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { Localized } from "fluent-react";
import React from "react";

import mountWithL10n from "test/unit/mocks/l10n";
import { NEW_ITEM_ID } from "src/list/common";
import ItemSummary from "src/list/components/item-summary";

chai.use(chaiEnzyme());

describe("list > components > <ItemSummary/>", () => {
  it("render existing item", () => {
    const wrapper = mountWithL10n(
      <ItemSummary title="title" username="username"/>
    );
    expect(wrapper.find(Localized).at(0)).to.have.prop(
      "id", "item-summary-title"
    );
    expect(wrapper.find(Localized).at(1)).to.have.prop(
      "id", "item-summary-username"
    );
    expect(wrapper.find("button")).to.have.length(0);
  });

  it("render new item", () => {
    const wrapper = mountWithL10n(
      <ItemSummary id={NEW_ITEM_ID}/>
    );
    expect(wrapper.find(Localized).at(0)).to.have.prop(
      "id", "item-summary-new-title"
    );
    expect(wrapper.find(Localized).at(1)).to.have.prop(
      "id", "item-summary-new-username"
    );
    expect(wrapper.find("button")).to.have.length(0);
  });

  it("merge classNames", () => {
    const wrapper = mountWithL10n(
      <ItemSummary className="foo" title="title" username="username"/>
    );
    expect(wrapper.find("div > div").prop("className")).to.match(
      /^\S*item-summary\S* foo$/
    );
  });

  describe("panel", () => {
    it("render info icon in panel", () => {
      const wrapper = mountWithL10n(
          <ItemSummary id="1" title="title" panel={true}
                       username="whudson@uscmc.mil"/>
      );
      expect(wrapper.find(Localized).at(0)).to.have.prop(
        "id", "item-summary-title"
      );
      expect(wrapper.find(Localized).at(1)).to.have.prop(
        "id", "item-summary-username"
      );
      expect(wrapper.find("span").prop("className")).to.match(/^\S*info\S*/);
    });

    it("don't render info icon in panel", () => {
      const wrapper = mountWithL10n(
          <ItemSummary id="1" title="title" username="whudson@uscmc.mil"/>
      );
      expect(wrapper.find(Localized).at(0)).to.have.prop(
        "id", "item-summary-title"
      );
      expect(wrapper.find(Localized).at(1)).to.have.prop(
        "id", "item-summary-username"
      );
      expect(wrapper.find(".info")).to.have.length(0);
    });
  });
});
