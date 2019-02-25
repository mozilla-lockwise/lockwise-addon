/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import mountWithL10n from "test/unit/mocks/l10n";
import ItemDetails from "src/list/manage/components/item-details";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > manage > components > <ItemDetails/>", () => {
  const fields = {
    title: "title",
    origin: "origin",
    username: "username",
    password: "password",
  };

  let onEdit, onDelete, wrapper;

  beforeEach(() => {
    onEdit = sinon.spy();
    onDelete = sinon.spy();
    wrapper = mountWithL10n(
      <ItemDetails fields={fields} onCopy={() => {}} onEdit={onEdit}
                   onDelete={onDelete}/>
    );
  });

  it("render fields", () => {
    // filter out title since it isn't actually included in the fields component
    // anymore, but is displayed in at a higher in the document.
    let clone = Object.assign({}, fields);
    delete clone.title;
    for (let i in clone) {
      if (i !== "password") {
        expect(wrapper.find(`[data-name="${i}"]`).filterWhere((x) => {
          return typeof x.type() !== "string";
        })).to.have.text(fields[i]);
      }
    }
  });

  it("onEdit called", () => {
    wrapper.findWhere((x) => x.prop("id") === "item-details-edit")
           .find("button").simulate("click");
    expect(onEdit).to.have.been.calledWith();
  });

  it("onDelete called", () => {
    wrapper.findWhere((x) => x.prop("id") === "item-details-delete")
           .find("button").simulate("click");
    expect(onDelete).to.have.been.calledWith();
  });
});
