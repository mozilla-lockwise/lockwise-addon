/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import sinon from "sinon";

import "test/unit/mocks/browser";

import {
  initializeEnvironment,
} from "src/background/environment";

describe("background > environment", () => {
  it("disables login saving for extension pages", async () => {
    sinon
      .stub(browser.experiments.logins, "getLoginSavingEnabled")
      .resolves(true);
    sinon
      .stub(browser.experiments.logins, "setLoginSavingEnabled")
      .resolves(undefined);
    sinon
      .stub(browser.extension, "getURL")
      .returns("moz-extension://8675309/");

    await initializeEnvironment();

    expect(browser.experiments.logins.getLoginSavingEnabled.called).to.be.true;
    expect(browser.experiments.logins.setLoginSavingEnabled.called).to.be.true;

    const args = browser.experiments.logins.setLoginSavingEnabled.firstCall.args;
    expect(args[0]).to.equal("moz-extension://8675309");
    expect(args[1]).to.equal(false);

    browser.experiments.logins.getLoginSavingEnabled.restore();
    browser.experiments.logins.setLoginSavingEnabled.restore();
    browser.extension.getURL.restore();
  });
});
