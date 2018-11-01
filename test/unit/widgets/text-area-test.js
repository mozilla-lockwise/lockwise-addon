/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import chaiFocus from "test/unit/chai-focus";
import { mount, mountIntoDOM } from "test/unit/enzyme";
import TextArea from "src/widgets/text-area";

chai.use(chaiEnzyme());
chai.use(chaiFocus);

describe("widgets > <TextArea/>", () => {
  it("render textarea", () => {
    const wrapper = mount(<TextArea value="text" onChange={() => {}}/>);
    expect(wrapper.find("textarea")).to.have.prop("value", "text");
  });

  it("merge classNames", () => {
    const wrapper = mount(
      <TextArea className="foo" value="text" onChange={() => {}}/>
    );
    expect(wrapper.find("textarea").prop("className")).to.match(
      /^\S+text-area\S+ foo$/
    );
  });

  it("focus() focuses textarea", () => {
    const wrapper = mountIntoDOM(
      <TextArea value="some text" onChange={() => {}}/>
    );
    wrapper.instance().focus();
    expect(wrapper.find("textarea")).to.be.focused();
    expect(wrapper.find("textarea")).to.have.selection(0, 0);
  });

  it("focus(true) focuses/selects textarea", () => {
    const wrapper = mountIntoDOM(
      <TextArea value="some text" onChange={() => {}}/>
    );
    wrapper.instance().focus(true);
    expect(wrapper.find("textarea")).to.be.focused();
    expect(wrapper.find("textarea")).to.have.selection();
  });
});
