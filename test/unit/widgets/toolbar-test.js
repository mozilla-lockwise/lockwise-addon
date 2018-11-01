/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import { mount } from "test/unit/enzyme";
import Toolbar, { ToolbarSpace } from "src/widgets/toolbar";

chai.use(chaiEnzyme());

describe("widgets > toolbar", () => {
  describe("<Toolbar/>", () => {
    it("render toolbar", () => {
      const wrapper = mount(
        <Toolbar>
          <span>hello</span>
        </Toolbar>
      );
      expect(wrapper.find("span")).to.have.text("hello");
      expect(wrapper.find("menu").prop("className")).to.match(
        /^\S+toolbar\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(
        <Toolbar className="foo">
          <span>hello</span>
        </Toolbar>
      );
      expect(wrapper.find("menu").prop("className")).to.match(
        /^\S+toolbar\S+ foo$/
      );
    });
  });

  describe("<ToolbarSpace/>", () => {
    it("render space", () => {
      const wrapper = mount(<ToolbarSpace/>);
      expect(wrapper.find("span")).to.have.length(1);
      expect(wrapper.find("span").prop("className")).to.match(
        /^\S+toolbar-space\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(<ToolbarSpace className="foo"/>);
      expect(wrapper.find("span").prop("className")).to.match(
        /^\S+toolbar-space\S+ foo$/
      );
    });
  });
});
