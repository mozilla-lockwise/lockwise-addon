/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import chaiFocus from "test/unit/chai-focus";
import { mount, mountIntoDOM } from "test/unit/enzyme";
import Input from "src/widgets/input";

chai.use(chaiEnzyme());
chai.use(chaiFocus);

describe("widgets > <Input/>", () => {
  it("render input", () => {
    const wrapper = mount(<Input value="some text" onChange={() => {}}/>);
    expect(wrapper.find("input")).to.have.prop("value", "some text");
    expect(wrapper.find("input").prop("className")).to.match(
      /^\S+input\S+$/
    );
  });

  it("merge classNames", () => {
    const wrapper = mount(
      <Input className="foo" value="some text" onChange={() => {}}/>
    );
    expect(wrapper.find("input").prop("className")).to.match(
      /^\S+input\S+ foo$/
    );
  });

  it("monospace", () => {
    const wrapper = mount(
      <Input monospace={true} value="some text" onChange={() => {}}/>
    );
    expect(wrapper.find("input").prop("className")).to.match(
      /^\S+input\S+ \S+monospace\S+$/
    );
  });

  it("monospace with merged classnames", () => {
    const wrapper = mount(
      <Input monospace={true} className="foo" value="some text"
             onChange={() => {}}/>
    );
    expect(wrapper.find("input").prop("className")).to.match(
      /^\S+input\S+ \S+monospace\S+ foo$/
    );
  });

  it("focus() focuses input", () => {
    const wrapper = mountIntoDOM(
      <Input value="some text" onChange={() => {}}/>
    );
    wrapper.instance().focus();
    expect(wrapper.find("input")).to.be.focused();
    expect(wrapper.find("input")).to.have.selection(9, 9);
  });

  it("focus(true) focuses/selects input", () => {
    const wrapper = mountIntoDOM(
      <Input value="some text" onChange={() => {}}/>
    );
    wrapper.instance().focus(true);
    expect(wrapper.find("input")).to.be.focused();
    expect(wrapper.find("input")).to.have.selection();
  });
});
