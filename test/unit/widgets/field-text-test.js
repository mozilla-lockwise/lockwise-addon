/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import { mount } from "test/unit/enzyme";
import FieldText from "src/widgets/field-text";

chai.use(chaiEnzyme());

describe("widgets > <FieldText/>", () => {
  it("render text", () => {
    const wrapper = mount(<FieldText>hi</FieldText>);
    expect(wrapper.find("span")).to.have.text("hi");
    expect(wrapper.find("span").prop("className")).to.match(
      /^\S+field-text\S+$/
    );
  });

  it("merge classNames", () => {
    const wrapper = mount(<FieldText className="foo">hi</FieldText>);
    expect(wrapper.find("span").prop("className")).to.match(
      /^\S+field-text\S+ foo$/
    );
  });

  it("monospace", () => {
    const wrapper = mount(
      <FieldText monospace={true}>hi</FieldText>
    );
    expect(wrapper.find("span").prop("className")).to.match(
      /^\S+field-text\S+ \S+monospace\S+$/
    );
  });

  it("monospace with merged classnames", () => {
    const wrapper = mount(
      <FieldText monospace={true} className="foo">hi</FieldText>
    );
    expect(wrapper.find("span").prop("className")).to.match(
      /^\S+field-text\S+ \S+monospace\S+ foo$/
    );
  });
});
