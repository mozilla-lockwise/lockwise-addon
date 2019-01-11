/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getWebExtension from "./driver";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

const mockLogin = {
  guid: "{33535344-9cdb-8c4a-ae10-5849d0a2f04a}",
  timeCreated: 1546291981955,
  timeLastUsed: 1546291981955,
  timePasswordChanged: 1546291981955,
  timesUsed: 1,
  hostname: "https://example.com",
  httpRealm: null,
  formSubmitURL: "https://example.com",
  usernameField: "username",
  passwordField: "password",
  username: "creativeusername",
  password: "p455w0rd",
};

describe("logins API", () => {
  let webext;
  let driver;
  let webdriver;
  let By;
  let until;

  const addLogin = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      // XXX For some reason, template substitution doesn't work with selenium
      const mockLogin = {
        guid: "{33535344-9cdb-8c4a-ae10-5849d0a2f04a}",
        timeCreated: 1546291981955,
        timeLastUsed: 1546291981955,
        timePasswordChanged: 1546291981955,
        timesUsed: 1,
        hostname: "https://example.com",
        httpRealm: null,
        formSubmitURL: "https://example.com",
        usernameField: "username",
        passwordField: "password",
        username: "creativeusername",
        password: "p455w0rd",
      };
      const login = LoginHelper.vanillaObjectToLogin(mockLogin);
      Services.logins.addLogin(login);
    `);
  };

  const getLogins = async () => {
    await webext.inChrome();
    const logins = await driver.executeScript(`
      return Services.logins.getAllLogins().map(LoginHelper.loginToVanillaObject);
    `);
    return logins;
  };

  const loadTestPage = async () => {
    await webext.inContent();
    await driver.get(webext.url("/test/integration/test-pages/logins-api.html"));
  };

  const clickButton = async (id) => {
    await webext.inContent();
    const btn = await driver.wait(until.elementLocated(
      By.id(id)
    ), 1000);
    await btn.click();
  };

  before(async () => {
    webext = await getWebExtension();
    await webext.start();
    driver = await webext.driver;
    webdriver = webext.webdriver;
    By = webdriver.By;
    until = webdriver.until;
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

  after(async () => {
    await webext.stop();
  });

  it("browser.experiments.logins.add should add a new login", async () => {
    await webext.inChrome();
    const initialLogins = await getLogins();
    expect(initialLogins).to.be.an("array").that.is.empty;

    await loadTestPage();
    await clickButton("add");

    await webext.inChrome();
    const finalLogins = await getLogins();
    expect(finalLogins[0]).to.deep.equal(mockLogin);
  });

  it("browser.experiments.logins.remove should remove the login", async () => {
    await addLogin();

    await loadTestPage();
    await clickButton("remove");

    await webext.inChrome();
    const results = await getLogins();
    expect(results).to.be.an("array").that.is.empty;
  });

  it("browser.experiments.logins.get should return the login", async () => {
    await addLogin();

    await loadTestPage();
    await clickButton("get");

    const results = await driver.wait(until.elementLocated(
      By.id("get-results")
    ), 1000);
    await driver.wait(until.elementTextContains(results, "guid"), 5000);
    const output = await results.getText();
    expect(JSON.parse(output)).to.deep.equal(mockLogin);
  });

  it("browser.experiments.logins.getAll should return the login in an array", async () => {
    await addLogin();

    await loadTestPage();
    await clickButton("get-all");

    const results = await driver.wait(until.elementLocated(
      By.id("get-all-results")
    ), 1000);
    await driver.wait(until.elementTextContains(results, "guid"), 5000);
    const output = await results.getText();
    expect(JSON.parse(output)).to.deep.equal([mockLogin]);
  });

  it("browser.experiments.logins.update should update the username", async () => {
    await addLogin();

    await loadTestPage();
    await clickButton("update");

    await getLogins();
    const logins = await getLogins();
    expect(logins[0].username).to.equal("updated");
  });

  it("browser.experiments.logins.touch should update the timesUsed and lastTimeUsed values", async () => {
    await addLogin();

    await loadTestPage();
    await clickButton("touch");

    const logins = await getLogins();
    expect(logins[0].timesUsed).to.equal(2);
  });
});
