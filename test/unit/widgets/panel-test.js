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
import mountWithL10n from "test/unit/mocks/l10n";
import Toolbar from "src/widgets/toolbar";
import Panel, { PanelHeader, PanelBody, PanelFooter, PanelFooterButton } from
       "src/widgets/panel";

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(chaiFocus);

describe("widgets > panel", () => {
  describe("<PanelHeader/>", () => {
    it("render header", () => {
      const wrapper = mount(<PanelHeader>header</PanelHeader>);
      expect(wrapper.find("header")).to.have.descendants(Toolbar);
      expect(wrapper.find("menu")).to.have.text("header");
      expect(wrapper.find("header").prop("className")).to.match(
        /^\S+panel-header\S+ \S+normal-border\S+$/
      );
      expect(wrapper.find("button")).to.have.length(0);
    });

    it("render floating border", () => {
      const wrapper = mount(
        <PanelHeader border="floating">header</PanelHeader>
      );
      expect(wrapper.find("header").prop("className")).to.match(
        /^\S+panel-header\S+ \S+floating-border\S+$/
      );
    });

    it("render no border", () => {
      const wrapper = mount(
        <PanelHeader border="none">header</PanelHeader>
      );
      expect(wrapper.find("header").prop("className")).to.match(
        /^\S+panel-header\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(<PanelHeader className="foo"/>);
      expect(wrapper.find("header").prop("className")).to.match(
        /^\S+panel-header\S+ \S+normal-border\S+ foo$/
      );
    });

    it("onBack fired", () => {
      const onBack = sinon.spy();
      const wrapper = mountWithL10n(
        <PanelHeader onBack={onBack}>header</PanelHeader>
      );
      wrapper.find("button").simulate("click");
      expect(onBack).to.have.callCount(1);
    });
  });

  describe("<PanelBody/>", () => {
    it("render body", () => {
      const wrapper = mount(<PanelBody>body</PanelBody>);
      expect(wrapper.find("section")).to.have.text("body");
      expect(wrapper.find("section").prop("className")).to.match(
        /^\S+panel-body\S+ \S+scroll\S+$/
      );
    });

    it("render without scrolling", () => {
      const wrapper = mount(<PanelBody scroll={false}>body</PanelBody>);
      expect(wrapper.find("section")).to.have.text("body");
      expect(wrapper.find("section").prop("className")).to.match(
        /^\S+panel-body\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(<PanelBody className="foo"/>);
      expect(wrapper.find("section").prop("className")).to.match(
        /^\S+panel-body\S+ \S+scroll\S+ foo$/
      );
    });
  });

  describe("<PanelFooter/>", () => {
    it("render footer", () => {
      const wrapper = mount(<PanelFooter>footer</PanelFooter>);
      expect(wrapper.find("footer")).to.have.text("footer");
      expect(wrapper.find("footer").prop("className")).to.match(
        /^\S+panel-footer\S+ \S+normal-border\S+$/
      );
    });

    it("render floating border", () => {
      const wrapper = mount(
        <PanelFooter border="floating">header</PanelFooter>
      );
      expect(wrapper.find("footer").prop("className")).to.match(
        /^\S+panel-footer\S+ \S+floating-border\S+$/
      );
    });

    it("render no border", () => {
      const wrapper = mount(
        <PanelFooter border="none">header</PanelFooter>
      );
      expect(wrapper.find("footer").prop("className")).to.match(
        /^\S+panel-footer\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(<PanelFooter className="foo"/>);
      expect(wrapper.find("footer").prop("className")).to.match(
        /^\S+panel-footer\S+ \S+normal-border\S+ foo$/
      );
    });
  });

  describe("<PanelFooterButton/>", () => {
    it("render button", () => {
      const wrapper = mount(<PanelFooterButton>click me</PanelFooterButton>);
      expect(wrapper.find("button")).to.have.text("click me");
      expect(wrapper.find("button").prop("className")).to.match(
          /^\S+button\S+ \S+panel-footer-button\S+ \S+normal-theme\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(
        <PanelFooterButton className="foo">click me</PanelFooterButton>
      );
      expect(wrapper.find("button").prop("className")).to.match(
          /^\S+button\S+ \S+panel-footer-button\S+ \S+normal-theme\S+ foo$/
      );
    });

    it("onClick fired", () => {
      const onClick = sinon.spy();
      const wrapper = mount(
        <PanelFooterButton onClick={onClick}>click me</PanelFooterButton>
      );
      wrapper.find("button").simulate("click");
      expect(onClick).to.have.callCount(1);
    });

    it("focus() focuses button", () => {
      const wrapper = mountIntoDOM(
        <PanelFooterButton>click me</PanelFooterButton>
      );
      wrapper.instance().focus();
      expect(wrapper.find("button")).to.be.focused(document);
    });
  });

  describe("<Panel/>", () => {
    it("render panel", () => {
      const wrapper = mount(
        <Panel>
          <PanelHeader>header</PanelHeader>
          <PanelBody>body</PanelBody>
          <PanelFooter>footer</PanelFooter>
        </Panel>
      );
      expect(wrapper.find("article").find("header")).to.have.text("header");
      expect(wrapper.find("article").find("section")).to.have.text("body");
      expect(wrapper.find("article").find("footer")).to.have.text("footer");
      expect(wrapper.find("article").prop("className")).to.match(
        /^\S+panel\S+$/
      );
    });

    it("merge classNames", () => {
      const wrapper = mount(
        <Panel className="foo">
          <PanelBody>body</PanelBody>
        </Panel>);
      expect(wrapper.find("article").prop("className")).to.match(
        /^\S+panel\S+ foo$/
      );
    });
  });
});
