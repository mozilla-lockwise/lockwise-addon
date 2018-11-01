/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";

import { makeItemSummary, classNames } from "src/common";

describe("common", () => {
  describe("makeItemSummary", () => {
    it("makes a summary object", () => {
      let full = {
        id: "04052872-8347-45E9-9A03-6063093C450A",
        title: "example.com",
        origins: ["https://example.com"],
        entry: {
          username: "myusername",
          password: "ishouldchangeit",
        },
      };
      expect(makeItemSummary(full)).to.deep.equal({
        title: "example.com",
        id: "04052872-8347-45E9-9A03-6063093C450A",
        origins: ["https://example.com"],
        username: "myusername",
      });
    });
  });

  describe("classNames", () => {
    it("concatenates class names", () => {
      expect(classNames(["one"])).to.equal("one");
      expect(classNames(["one", "two"])).to.equal("one two");
      expect(classNames(["one", "two", "three"])).to.equal("one two three");
    });
    it("ignores empty/null/undefined elements", () => {
      expect(classNames(["one", "", "three"])).to.equal("one three");
      expect(classNames(["one", null, "three"])).to.equal("one three");
      expect(classNames(["one", undefined, "three"])).to.equal("one three");
    });
  });
});
