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
import { Link, ExternalLink } from "src/widgets/link";

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(chaiFocus);

for (let [Component, classRegExp] of [
  [Link, "\\S+link\\S+"],
  [ExternalLink, "\\S+link\\S+ \\S+external\\S+"],
]) {
  describe(`widgets > <${Component.name}/>`, () => {
    it("render", () => {
      const wrapper = mount(
        <Component onClick={() => {}}>link text</Component>
      );
      expect(wrapper.find("button")).to.have.text("link text");
      expect(wrapper.find("button")).prop("className").to.match(new RegExp(
        "^" + classRegExp + "$"
      ));
    });

    it("merge classNames", () => {
      const wrapper = mount(
        <Component onClick={() => {}}
          className="extra-extra">link text</Component>
      );
      expect(wrapper.find("button")).to.have.text("link text");
      expect(wrapper.find("button")).prop("className").to.match(new RegExp(
        "^" + classRegExp + " extra-extra$"
      ));
    });

    it("onClick fired", () => {
      const onClick = sinon.spy();
      const wrapper = mount(
        <Component onClick={onClick}>link text</Component>
      );

      wrapper.find("button").simulate("click");
      expect(onClick).to.have.callCount(1);
    });

    it("focus() focuses link", () => {
      const wrapper = mountIntoDOM(
        <Component onClick={() => {}}>link text</Component>
      );
      wrapper.instance().focus();
      expect(wrapper.find("button")).to.be.focused(document);
    });
  });
}
