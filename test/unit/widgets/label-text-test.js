/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import { mount } from "test/unit/enzyme";
import LabelText from "src/widgets/label-text";

chai.use(chaiEnzyme());

describe("widgets > <LabelText/>", () => {
  it("render text", () => {
    const wrapper = mount(<LabelText>hi</LabelText>);
    expect(wrapper.find("span")).to.have.text("hi");
    expect(wrapper.find("span").prop("className")).to.match(
      /^\S+label-text\S+$/
    );
  });

  it("merge classNames", () => {
    const wrapper = mount(<LabelText className="foo">hi</LabelText>);
    expect(wrapper.find("span").prop("className")).to.match(
      /^\S+label-text\S+ foo$/
    );
  });
});
