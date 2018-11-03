/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";

import * as filter from "src/list/filter";

describe("list > filters", () => {
  describe("parseFilterString()", () => {
    it("split on whitespace", () => {
      expect(filter.parseFilterString("foo bar")).to.deep.equal(["foo", "bar"]);
    });

    it("trim whitespace", () => {
      expect(filter.parseFilterString(" foo ")).to.deep.equal(["foo"]);
    });

    it("convert to lower case", () => {
      expect(filter.parseFilterString("FOO BAR")).to.deep.equal(["foo", "bar"]);
    });

    it("empty string yields 0 filter elements", () => {
      expect(filter.parseFilterString("")).to.deep.equal([]);
    });
  });

  describe("filterItem()", () => {
    const items = [
      {title: "foo title", username: "foo username",
       origins: ["foo-origin.com"]},
      {title: "bar title", username: "bar username",
       origins: ["bar-origin.com"]},
    ];

    describe("empty filter", () => {
      it("match anything", () => {
        const emptyFilter = filter.parseFilterString(" ");
        for (let i of items) {
          expect(filter.filterItem(emptyFilter, i)).to.equal(true);
        }
      });
    });

    describe("non-empty filter", () => {
      let myFilter;

      beforeEach(() => {
        myFilter = filter.parseFilterString("foo TITLE UserName origin");
      });

      it("parsed correctly", () => {
        expect(myFilter).to.deep.equal(["foo", "title", "username", "origin"]);
      });

      it("match first item", () => {
        expect(filter.filterItem(myFilter, items[0])).to.equal(true);
      });

      it("fail to match second item", () => {
        expect(filter.filterItem(myFilter, items[1])).to.equal(false);
      });
    });
  });
});
