/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import { mount } from "test/unit/enzyme";
import Breadcrumbs, { Crumb } from "src/widgets/breadcrumbs";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("widgets > breadcrumbs", () => {
  describe("<Breadcrumbs/>", () => {
    it("render breadcrumbs", () => {
      const wrapper = mount(
        <Breadcrumbs>
          <Crumb>one</Crumb>
        </Breadcrumbs>
      );
      expect(wrapper.find("div").find("span")).to.have.text("one");
      expect(wrapper.find("div").prop("className")).to.match(
        /^\S+breadcrumbs\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(
        <Breadcrumbs className="foo">
          <Crumb>one</Crumb>
        </Breadcrumbs>
      );
      expect(wrapper.find("div").prop("className")).to.match(
        /^\S+breadcrumbs\S+ foo$/
      );
    });
  });

  describe("<Crumb/>", () => {
    it("render text crumb", () => {
      const wrapper = mount(<Crumb>crummy</Crumb>);
      expect(wrapper.find("span")).to.have.text("crummy");
      expect(wrapper.find("span").prop("className")).to.match(
          /^\S+crumb\S+$/
      );
    });

    it("render link crumb", () => {
      const wrapper = mount(<Crumb onClick={() => {}}>crummy</Crumb>);
      expect(wrapper.find("button")).to.have.text("crummy");
      expect(wrapper.find("button").prop("className")).to.match(
          /^\S+link\S+ \S+crumb\S+$/
      );
    });

    it("merge classNames (text)", () => {
      const wrapper = mount(<Crumb className="foo">crummy</Crumb>);
      expect(wrapper.find("span").prop("className")).to.match(
          /^\S+crumb\S+ foo$/
      );
    });

    it("merge classNames (link)", () => {
      const wrapper = mount(
        <Crumb onClick={() => {}} className="foo">crummy</Crumb>
      );
      expect(wrapper.find("button").prop("className")).to.match(
          /^\S+link\S+ \S+crumb\S+ foo$/
      );
    });

    it("onClick fired", () => {
      const onClick = sinon.spy();
      const wrapper = mount(<Crumb onClick={onClick}>crummy</Crumb>);
      wrapper.find("button").simulate("click");
      expect(onClick).to.have.callCount(1);
    });
  });
});
