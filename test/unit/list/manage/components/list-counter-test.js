/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { Localized } from "fluent-react";
import React from "react";

import mountWithL10n from "test/unit/mocks/l10n";
import ListCounter from "src/list/manage/components/list-counter";

chai.use(chaiEnzyme());

describe("list > manage > components > <ListCounter/>", () => {
  it("render empty", () => {
    const wrapper = mountWithL10n(
      <ListCounter />
    );
    expect(wrapper).to.have.text("0 eNTRIEs");
    expect(wrapper.find(Localized).at(0)).to.have.prop(
      "id", "list-count"
    );
  });
  it("render with 1 item", () => {
    const wrapper = mountWithL10n(
      <ListCounter count="1" />
    );
    expect(wrapper).to.have.text("1 eNTRIEs");
  });
  it("render with 3 items", () => {
    const wrapper = mountWithL10n(
      <ListCounter count="3" />
    );
    expect(wrapper).to.have.text("3 eNTRIEs");
  });
});
