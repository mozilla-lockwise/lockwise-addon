/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactWrapper } from "enzyme";

export default function chaiFocus(chai, utils) {
  chai.Assertion.addMethod("focused", function(doc = window.document) {
    const obj = this._obj instanceof ReactWrapper ? this._obj.instance() :
                this._obj;

    this.assert(
      obj === doc.activeElement,
      "expected #{exp} to be focused but got #{act}",
      "expected #{exp} not to be focused",
      obj.tagName,
      doc.activeElement.tagName
    );
  });

  chai.Assertion.addMethod("selection", function(start = 0, end = null) {
    const obj = this._obj instanceof ReactWrapper ? this._obj.instance() :
                this._obj;

    if (end === null) {
      end = obj.value.length;
    }

    this.assert(
      obj.selectionStart === start && obj.selectionEnd === end,
      "expected #{exp} of #{this} to be selected but got #{act}",
      "expected not #{exp} of #{this} to be selected",
      `[${start}, ${end})`,
      `[${obj.selectionStart}, ${obj.selectionEnd})`,
    );
  });
}
