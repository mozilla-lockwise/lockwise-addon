/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import sinonChai from "sinon-chai";
import "test/unit/mocks/browser";

import updateBrowserAction from "src/background/browser-action";

chai.use(chaiAsPromised);
chai.use(sinonChai);

describe("background > browser action", () => {
  it("opens popup", async () => {
    await updateBrowserAction();
    await expect(browser.browserAction.getPopup()).to.eventually.equal(
      browser.extension.getURL("list/popup.html")
    );
  });
});
