/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinonChai from "sinon-chai";

import { mount } from "test/unit/enzyme";
import Banner from "src/widgets/banner";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("widgets > <Banner/>", () => {
  it("render", () => {
    const wrapper = mount(
      <Banner>
        <span>hello</span>
      </Banner>
    );
    expect(wrapper.find("span")).to.have.text("hello");
  });

  it("merge class names", () => {
    const wrapper = mount(
      <Banner className="bar">
        <span>foo</span>
      </Banner>
    );
    expect(wrapper.find("div")).prop("className").to.match(
      /^\S*banner\S* bar$/
    );
  });
});
