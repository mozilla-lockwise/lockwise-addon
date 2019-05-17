/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import chaiFocus from "test/unit/chai-focus";
import mountWithL10n, { mountWithL10nIntoDOM } from "test/unit/mocks/l10n";
import PasswordInput from "src/widgets/password-input";

chai.use(chaiEnzyme());
chai.use(chaiFocus);
chai.use(sinonChai);

describe("widgets > <PasswordInput/>", () => {
  it("render input", () => {
    const wrapper = mountWithL10n(
      <PasswordInput value="my password" onReveal={() => {}} onChange={() => {}}/>
    );
    expect(wrapper.find("input")).to.have.prop("value", "my password");
    expect(wrapper.find("input")).to.have.prop("type", "password");
    expect(wrapper.childAt(0).prop("className")).to.match(
      /^\S+password\S+ \S+input-wrapper\S+$/
    );
    expect(wrapper.find("input").prop("className")).to.match(
      /^\S+monospace\S+$/
    );
  });

  it("render showing password", () => {
    const wrapper = mountWithL10n(
      <PasswordInput value="my password" showPassword={true} onReveal={() => { }} onChange={() => { }} />
    );
    expect(wrapper.find("input")).to.have.prop("value", "my password");
    expect(wrapper.find("input")).to.have.prop("type", "text");
    expect(wrapper.childAt(0).prop("className")).to.match(
      /^\S+password\S+ \S+input-wrapper\S+$/
    );
    expect(wrapper.find("input").prop("className")).to.match(
      /^\S+monospace\S+$/
    );
  });

  it("merge classNames", () => {
    const wrapper = mountWithL10n(
      <PasswordInput className="foo" value="some text" onReveal={() => {}} onChange={() => {}}/>
    );
    expect(wrapper.childAt(0).prop("className")).to.match(
      /^\S+password\S+ \S+input-wrapper\S+ foo$/
    );
  });

  it("non-monospace", () => {
    const wrapper = mountWithL10n(
      <PasswordInput monospace={false} value="my password" onReveal={() => {}} onChange={() => {}}/>
    );
    expect(wrapper.find("input")).to.have.prop("className", "");
  });

  it("show button triggers callback", async () => {
    const spy = sinon.spy();
    const wrapper = mountWithL10n(
      <PasswordInput value="password" showPassword={false} onReveal={spy} onChange={() => {}}/>
    );

    wrapper.find("button").at(0).simulate("click");
    expect(spy).to.have.been.calledWith(true);
  });

  it("hide button triggers callback", async () => {
    const spy = sinon.spy();
    const wrapper = mountWithL10n(
      <PasswordInput value="password" showPassword={true} onReveal={spy} onChange={() => { }} />
    );

    wrapper.find("button").at(1).simulate("click");
    expect(spy).to.have.been.calledWith(false);
  });

  it("focus() focuses input", () => {
    const wrapper = mountWithL10nIntoDOM(
      <PasswordInput value="password" onReveal={() => {}} onChange={() => {}}/>
    );
    wrapper.instance().focus();
    expect(wrapper.find("input")).to.be.focused();
  });
});
