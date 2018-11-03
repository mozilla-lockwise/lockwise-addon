/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import mountWithL10n from "test/unit/mocks/l10n";
import ItemList from "src/list/components/item-list";
import ItemSummary from "src/list/components/item-summary";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > components > <ItemList/>", () => {
  let onChange, onClick, wrapper;
  const items = [
    {id: "0", title: "title 0", username: "username 0"},
    {id: "1", title: "title 1", username: "username 1"},
    {id: "2", title: "title 2", username: "username 2"},
  ];

  beforeEach(() => {
    onChange = sinon.spy();
    onClick = sinon.spy();
    wrapper = mountWithL10n(
      <ItemList items={items} selected={items[0].id} onChange={onChange}
                onClick={onClick}/>
    );
  });

  it("render all items", () => {
    expect(wrapper.find(ItemSummary)).to.have.length(3);
    wrapper.find(ItemSummary).forEach((i) => {
      expect(i).to.have.prop("verbose", false);
    });
  });

  it("render all items verbosely", () => {
    wrapper.setProps({verbose: true});
    expect(wrapper.find(ItemSummary)).to.have.length(3);
    wrapper.find(ItemSummary).forEach((i) => {
      expect(i).to.have.prop("verbose", true);
    });
  });

  it("correct item is selected", () => {
    expect(wrapper.find("li").at(0)).to.have.prop("data-selected", true);
  });

  it("onChange() and onClick() called", () => {
    wrapper.find(ItemSummary).at(1).simulate("mousedown", {button: 0});
    expect(onChange).to.have.been.calledWith(items[1].id);
    expect(onClick).to.have.been.calledWith(items[1].id);
  });
});
