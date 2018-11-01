/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import chaiFocus from "test/unit/chai-focus";
import { mount, mountIntoDOM } from "test/unit/enzyme";
import Button from "src/widgets/button";

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(chaiFocus);

describe("widgets > <Button/>", () => {
  it("render button", () => {
    const wrapper = mount(<Button>click me</Button>);
    expect(wrapper.find("button")).to.have.text("click me");
    expect(wrapper.find("button").prop("className")).to.match(
      /^\S*button\S* \S*normal-theme\S* \S*normal-size\S*$/
    );
  });

  it("merge classNames", () => {
    const wrapper = mount(<Button className="foo">click me</Button>);
    expect(wrapper.find("button").prop("className")).to.match(
      /^\S*button\S* \S*normal-theme\S* \S*normal-size\S* foo$/
    );
  });

  it("onClick fired", () => {
    const onClick = sinon.spy();
    const wrapper = mount(<Button onClick={onClick}>click me</Button>);
    wrapper.find("button").simulate("click");
    expect(onClick).to.have.callCount(1);
  });

  it("focus() focuses button", () => {
    const wrapper = mountIntoDOM(<Button>click me</Button>);
    wrapper.instance().focus();
    expect(wrapper.find("button")).to.be.focused(document);
  });
});
