/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import getWebExtension from "./driver";
import createHelper from "./helper";

chai.use(chaiAsPromised);

const ident = "lockbox_mozilla_com";

describe("Lockbox functional testing", () => {
  let webext, helper;

  before(async () => {
    webext = await getWebExtension();
    await webext.start();
    helper = createHelper(webext);
  });

  it("has a toolbar button", async () => {
    await webext.inChrome();
    const button = await helper.toolbar();
    expect(button.getAttribute("tooltiptext")).eventually.to.equal("Lockbox");
  });
  it("opens the doorhanger", async () => {
    await webext.inChrome();
    const { driver, webdriver } = webext;
    const button = await helper.toolbar();
    button.click();
    const doorhanger = await driver.wait(webdriver.until.elementLocated(
      webdriver.By.id(`PanelUI-webext-${ident}-browser-action-view`)
    ), 1000);
    expect(doorhanger).to.not.be.null;
  });

  after(async () => {
    await webext.stop();
  });
});
