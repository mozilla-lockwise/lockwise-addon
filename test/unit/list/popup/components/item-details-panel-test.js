/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import mountWithL10n from "test/unit/mocks/l10n";
import ItemDetailsPanel from
       "src/list/popup/components/item-details-panel";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > popup > components > <ItemDetailsPanel/>", () => {
  const fields = {
    origin: "https://firefox.com",
    username: "username",
    password: "password",
  };

  const onCopy = () => {};
  function createWrapper(fields) {
    return mountWithL10n(
      <ItemDetailsPanel fields={fields} onBack={onBack} onCopy={onCopy} />
    );
  }

  let onBack, wrapper;
  beforeEach(() => {
    onBack = sinon.spy();
  });

  it("render fields", () => {
    wrapper = createWrapper(fields);
    for (let i in fields) {
      if (i !== "password") {
        if (i === "origin") {
          // We display the origin as host in <ItemFilter/>
          // when we are inside the panel. So check for that
          // specifically here.
          expect(wrapper.find(`[data-name="origin"]`).filterWhere((x) => {
            return typeof x.type() !== "string";
          })).to.have.text(new URL(fields[i]).host);
        } else {
          expect(wrapper.find(`[data-name="${i}"]`).filterWhere((x) => {
            return typeof x.type() !== "string";
          })).to.have.text(fields[i]);
        }
      }
    }
  });
  it("render fields with non-URL", () => {
    const altFields = {
      ...fields,
      origin: "origin",
    };
    wrapper = createWrapper(altFields);
    for (let i in fields) {
      if (i !== "password") {
        if (i === "origin") {
          // We display the origin as host in <ItemFilter/>
          // when we are inside the panel. So check for that
          // specifically here.
          expect(wrapper.find(`[data-name="origin"]`).filterWhere((x) => {
            return typeof x.type() !== "string";
          })).to.have.text(altFields[i]);
        } else {
          expect(wrapper.find(`[data-name="${i}"]`).filterWhere((x) => {
            return typeof x.type() !== "string";
          })).to.have.text(altFields[i]);
        }
      }
    }
  });

  it("onBack called", () => {
    wrapper = createWrapper(fields);
    wrapper.findWhere((x) => x.prop("id") === "item-details-panel-title")
           .find("button").simulate("click");
    expect(onBack).to.have.been.calledWith();
  });
});
