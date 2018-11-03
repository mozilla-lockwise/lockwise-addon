/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import waitUntil from "async-wait-until";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { Localized } from "fluent-react";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import CopyToClipboardButton from
       "src/widgets/copy-to-clipboard-button";
import mountWithL10n from "test/unit/mocks/l10n";
import { NEW_ITEM_ID } from "src/list/common";
import ItemSummary from "src/list/components/item-summary";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > components > <ItemSummary/>", () => {
  it("render existing item", () => {
    const wrapper = mountWithL10n(
      <ItemSummary title="title" username="username"/>
    );
    expect(wrapper.find(Localized).at(0)).to.have.prop(
      "id", "item-summary-title"
    );
    expect(wrapper.find(Localized).at(1)).to.have.prop(
      "id", "item-summary-username"
    );
    expect(wrapper.find("button")).to.have.length(0);
  });

  it("render new item", () => {
    const wrapper = mountWithL10n(
      <ItemSummary id={NEW_ITEM_ID}/>
    );
    expect(wrapper.find(Localized).at(0)).to.have.prop(
      "id", "item-summary-new-title"
    );
    expect(wrapper.find(Localized).at(1)).to.have.prop(
      "id", "item-summary-new-username"
    );
    expect(wrapper.find("button")).to.have.length(0);
  });

  it("merge classNames", () => {
    const wrapper = mountWithL10n(
      <ItemSummary className="foo" title="title" username="username"/>
    );
    expect(wrapper.find("div > div").prop("className")).to.match(
      /^\S*item-summary\S* foo$/
    );
  });

  describe("verbose", () => {
    let wrapper, mockCopy, onCopy;

    beforeEach(() => {
      mockCopy = sinon.spy();
      onCopy = sinon.spy();
      CopyToClipboardButton.__Rewire__("copy", mockCopy);

      wrapper = mountWithL10n(
        <ItemSummary verbose id="1" title="title"
                     username="whudson@uscmc.mil" onCopy={onCopy}/>
      );

      browser.runtime.onMessage.addListener(() => ({
        item: { entry: {password: "g4m3_0v3r"} },
      }));
    });

    afterEach(() => {
      browser.runtime.onMessage.mockClearListener();
      CopyToClipboardButton.__ResetDependency__("copy");
    });

    it("render item verbosely", () => {
      expect(wrapper.find(Localized).at(0)).to.have.prop(
        "id", "item-summary-title"
      );
      expect(wrapper.find(Localized).at(1)).to.have.prop(
        "id", "item-summary-username"
      );
      expect(wrapper.find("button")).to.have.length(2);
    });

    it("copy username", () => {
      wrapper.find("button").at(0).simulate("click");
      expect(mockCopy).to.have.been.calledWith("whudson@uscmc.mil");
      expect(onCopy).to.have.been.calledWith("username");
    });

    it("copy password", async () => {
      wrapper.find("button").at(1).simulate("click");
      await waitUntil(() => mockCopy.callCount === 1);
      expect(mockCopy).to.have.been.calledWith("g4m3_0v3r");
      expect(onCopy).to.have.been.calledWith("password");
    });
  });
});
