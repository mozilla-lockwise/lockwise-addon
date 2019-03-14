
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";

import * as s from "src/list/sort";
import { SORT_BY_NAME, SORT_BY_LAST_USED, SORT_BY_LAST_CHANGED } from "src/list/actions";

describe("sort > byName", () => {
  it("sorts alphabetically by title", () => {
    const unsorted = [{title: "foo"}, {title: "baz"}, {title: "bar"}];
    const sorted = [{title: "bar"}, {title: "baz"}, {title: "foo"}];
    expect(unsorted.sort(s.byName)).to.deep.equal(sorted);
  });
});

describe("sort > byLastUsed", () => {
  it("sorts by timeLastUsed", () => {
    const time = Date.now();
    const unsorted = [{ id: 1, timeLastUsed: time }, { id: 2, timeLastUsed: time + 100 }];
    const sorted = [{ id: 2, timeLastUsed: time + 100 }, { id: 1, timeLastUsed: time }];
    expect(unsorted.sort(s.byLastUsed)).to.deep.equal(sorted);
  });
});

describe("sort > byLastChanged", () => {
  it("sorts by timePasswordChanged", () => {
    const time = Date.now();
    const unsorted = [{ id: 1, timePasswordChanged: time }, { id: 2, timePasswordChanged: time + 100 }];
    const sorted = [{ id: 2, timePasswordChanged: time + 100 }, { id: 1, timePasswordChanged: time }];
    expect(unsorted.sort(s.byLastChanged)).to.deep.equal(sorted);
  });
});

describe("sort > getAction", () => {
  it("returns the correct action for each name", () => {
    expect(s.getAction("name")).to.equal(SORT_BY_NAME);
    expect(s.getAction("last-used")).to.equal(SORT_BY_LAST_USED);
    expect(s.getAction("last-changed")).to.equal(SORT_BY_LAST_CHANGED);
  });
});

describe("sort > getSortForAction", () => {
  it("returns the correct sort function for each action", () => {
    expect(s.getSortForAction(SORT_BY_NAME)).to.equal(s.byName);
    expect(s.getSortForAction(SORT_BY_LAST_USED)).to.equal(s.byLastUsed);
    expect(s.getSortForAction(SORT_BY_LAST_CHANGED)).to.equal(s.byLastChanged);
  });
});

describe("sort > getName", () => {
  it("returns the correct string for each action", () => {
    expect(s.getName(SORT_BY_NAME)).to.equal("name");
    expect(s.getName(SORT_BY_LAST_USED)).to.equal("last-used");
    expect(s.getName(SORT_BY_LAST_CHANGED)).to.equal("last-changed");
  });
});

describe("sort > getSort", () => {
  it("returns the correct sort function for each name", () => {
    expect(s.getSort("name")).to.equal(s.byName);
    expect(s.getSort("last-used")).to.equal(s.byLastUsed);
    expect(s.getSort("last-changed")).to.equal(s.byLastChanged);
  });
});
