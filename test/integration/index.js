/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const PATH = require("path");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const webExtensionsGeckoDriver = require("webextensions-geckodriver");

const { expect } = chai;
chai.use(chaiAsPromised);

const { webdriver } = webExtensionsGeckoDriver;
const manifest = PATH.resolve(__dirname, "../../dist/manifest.json");
const ident = "lockbox_mozilla_com";

describe("Lockbox functional testing", () => {
  let driver, helper;

  before(async () => {
    const webext = await webExtensionsGeckoDriver(manifest);
    driver = webext.geckodriver;
    helper = {
      toolbar() {
        return driver.wait(webdriver.until.elementLocated(
          webdriver.By.id(`${ident}-browser-action`)
        ), 1000);
      },
    };
  });

  it("has a toolbar button", async () => {
    const button = await helper.toolbar();
    expect(button.getAttribute("tooltiptext")).eventually.to.equal("Lockbox");
  });
  it("opens the doorhanger", async () => {
    const button = await helper.toolbar();
    button.click();
    const doorhanger = await driver.wait(webdriver.until.elementLocated(
      webdriver.By.id(`PanelUI-webext-${ident}-browser-action-view`)
    ), 1000);
    expect(doorhanger).to.not.be.null;
  });

  after(() => {
    driver.quit();
  });
});
