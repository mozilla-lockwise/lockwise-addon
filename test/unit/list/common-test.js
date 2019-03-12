/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import sinon from "sinon";
import "test/unit/mocks/browser";

import * as common from "src/list/common";

describe("list > common", () => {
  describe("openSyncPrefs", () => {
    let spyOpenPrefs;

    beforeEach(() => {
      spyOpenPrefs = sinon.spy(browser.experiments.sync, "openPreferences");
    });
    afterEach(() => {
      spyOpenPrefs.restore();
    });

    it("call WebExt API", async () => {
      common.openSyncPrefs();
      spyOpenPrefs.calledWith("lockbox-addon");
    });
  });
});
