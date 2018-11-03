/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import { Localized } from "fluent-react";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import mountWithL10n from "test/unit/mocks/l10n";
import { NEW_ITEM_ID } from "src/list/common";
import HomeBreadcrumbs from
       "src/list/manage/components/home-breadcrumbs";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > manage > components > <HomeBreadcrumbs/>", () => {
  let onClickHome;

  before(() => {
    onClickHome = sinon.spy();
  });

  it("render empty", () => {
    const wrapper = mountWithL10n(
      <HomeBreadcrumbs onClickHome={onClickHome}/>
    );
    expect(wrapper).to.be.blank();
  });

  it("render existing crumbs", () => {
    const wrapper = mountWithL10n(
      <HomeBreadcrumbs itemId="1" itemTitle="title" onClickHome={onClickHome}/>
    );
    expect(wrapper.find("button")).to.have.text("hOMe");
    expect(wrapper.find(Localized).at(1)).to.have.prop(
      "id", "breadcrumbs-item"
    );
  });

  it("render new crumbs", () => {
    const wrapper = mountWithL10n(
      <HomeBreadcrumbs itemId={NEW_ITEM_ID} itemTitle="title"
                       onClickHome={onClickHome}/>
    );
    expect(wrapper.find("button")).to.have.text("hOMe");
    expect(wrapper.find(Localized).at(1)).to.have.prop(
      "id", "breadcrumbs-item-new"
    );
  });

  it("click home button", () => {
    const wrapper = mountWithL10n(
      <HomeBreadcrumbs itemId="1" itemTitle="title" onClickHome={onClickHome}/>
    );
    wrapper.find("button").simulate("click");
    expect(onClickHome).to.have.callCount(1);
  });
});
