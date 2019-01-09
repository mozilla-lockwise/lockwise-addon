/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getWebExtension from "./driver";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import createHelper from "./helper";

chai.use(chaiAsPromised);

const mockLogin = {
  guid: "{33535344-9cdb-8c4a-ae10-5849d0a2f04a}",
  timeCreated: 1546291981955,
  timeLastUsed: 1546291981955,
  timePasswordChanged: 1546291981955,
  timesUsed: 1,
  hostname: "https://example.com",
  formSubmitURL: "https://example.com",
  usernameField: "username",
  passwordField: "password",
  username: "creativeusername",
  password: "p455w0rd"
};

describe("logins API", () => {
  let webext;
  let driver;


  before(async () => {
    webext = await getWebExtension();
    await webext.start();
    driver = await webext.driver;
    await webext.inChrome();
    await driver.executeScript(`
      ChromeUtils.defineModuleGetter(this, "LoginHelper",
                                     "resource://gre/modules/LoginHelper.jsm");
      ChromeUtils.defineModuleGetter(this, "Services",
                                     "resource://gre/modules/Services.jsm");
    `);
  });

  beforeEach(async () => {
    await webext.inChrome();
    await driver.executeScript(`
      Services.logins.removeAllLogins();
    `);
  });

  afterEach(async () => {
  });

  after(async () => {
    await driver.quit();
  });

  it("browser.experiments.logins.add should add a new login", async () => {
    const { webdriver } = webext;
    const { By, until } = webdriver;

    // 1. verify no logins.
    await webext.inChrome();
    const initialLogins = await driver.executeScript(`
      return Services.logins.getAllLogins().map(LoginHelper.loginToVanillaObject);
    `);
    expect(initialLogins).to.be.an('array').that.is.empty;

    // 2. open test page & add login via API.
    await webext.inContent();
    await driver.get(webext.url('/test/integration/test-pages/logins-api.html'));
    const btn = await driver.wait(until.elementLocated(
      By.id("add")
    ), 1000);
    await btn.click();
    // verify there's something in the output
    const results = await driver.wait(until.elementLocated(
      By.id("add-results")
    ), 1000);
    // temporarily insert a super long wait, so we can examine the running test
    // TODO: why is browser.experiments.logins undefined when the test loads the URL,
    // but available when I load the page from browser.tabs.create() in the about:debugger debugger?
    await driver.wait(until.elementTextContains(results, 'guid'),30000);
    const output = results.getText();
    expect(output).to.equal('foo');

    // 3. verify login.
    await webext.inChrome();
    const finalLogin = await driver.executeScript(`
      const login = Services.logins.getAllLogins()[0];
      return LoginHelper.loginToVanillaObject(login);
    `);
    expect(finalLogin).to.deep.equal(mockLogin);
  });
});
