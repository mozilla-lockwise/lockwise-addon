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
const mockSyncLogin = {
  guid: "{11111111-9cdb-8c4a-ae10-5849d0a2f04a}",
  timeCreated: 1546291981955,
  timeLastUsed: 1546291981955,
  timePasswordChanged: 1546291981955,
  timesUsed: 1,
  hostname: "chrome://FirefoxAccounts",
  httpRealm: "Firefox Accounts credentials",
  formSubmitURL: null,
  usernameField: "",
  passwordField: "",
  username: "14c73624237046f0964ac092194a6a23",
  password: "{long complicated sync object}",
};
const TEST_PAGE_URL = "/test/integration/test-pages/logins-api.html";

describe("logins API", () => {
  let webext;
  let driver;
  let webdriver;
  let By;
  let until;

  const enableRememberSignons = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      Services.prefs.setBoolPref("signon.rememberSignons", true);
    `);
  };

  const disableRememberSignons = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      Services.prefs.setBoolPref("signon.rememberSignons", false);
    `);
  };

  const addLogin = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      const login = ${JSON.stringify(mockLogin)};
      const loginInfo = LoginHelper.vanillaObjectToLogin(login);
      Services.logins.addLogin(loginInfo);
    `);
  };

  // The sync login shouldn't be exposed to the API, so it has to be added,
  // updated, and removed from the chrome side.
  const addSyncLogin = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      const syncLogin = ${JSON.stringify(mockSyncLogin)};
      const syncLoginInfo = LoginHelper.vanillaObjectToLogin(syncLogin);
      Services.logins.addLogin(syncLoginInfo);
    `);
  };

  const removeSyncLogin = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      const syncLogin = ${JSON.stringify(mockSyncLogin)};
      const syncLoginInfo = LoginHelper.vanillaObjectToLogin(syncLogin);
      Services.logins.removeLogin(syncLoginInfo);
    `);
  };

  const updateSyncLogin = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      const oldSyncLogin = ${JSON.stringify(mockSyncLogin)};
      const newSyncLogin = Object.assign({}, oldSyncLogin, {
        username: "updated",
      });
      const oldSyncLoginInfo = LoginHelper.vanillaObjectToLogin(oldSyncLogin);
      const newSyncLoginInfo = LoginHelper.vanillaObjectToLogin(newSyncLogin);
      Services.logins.modifyLogin(oldSyncLoginInfo, newSyncLoginInfo);
    `);
  };

  const getLogins = async () => {
    await webext.inChrome();
    const logins = await driver.executeScript(`
      return Services.logins.getAllLogins().map(LoginHelper.loginToVanillaObject);
    `);
    return logins;
  };

  const getPrefManagementURI = async () => {
    await webext.inChrome();
    const pref = await driver.executeScript(`
      return Services.prefs.getDefaultBranch(null).getStringPref("signon.management.overrideURI", "");
    `);
    return pref;
  };

  const loadTestPage = async () => {
    await webext.inContent();
    await driver.get(webext.url(TEST_PAGE_URL));
  };

  const clickButton = async (id) => {
    await webext.inContent();
    const btn = await driver.wait(until.elementLocated(
      By.id(id)
    ), 1000);
    await btn.click();
  };

  const getListenerResults = async () => {
    await webext.inContent();
    const results = await driver.wait(until.elementLocated(
      By.id("register-listeners-results")
    ), 5000);
    await driver.wait(until.elementTextContains(results, "["), 5000);
    const output = await results.getText();
    return output;
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

  describe("browser.experiments.logins.getAll", () => {
    it("should return the login in an array", async () => {
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
    it("should filter out the sync login", async () => {
      await addLogin();
      await addSyncLogin();

      await loadTestPage();
      await clickButton("get-all");

      const results = await driver.wait(until.elementLocated(
        By.id("get-all-results")
      ), 1000);
      await driver.wait(until.elementTextContains(results, "guid"), 5000);
      const output = await results.getText();
      expect(JSON.parse(output)).to.deep.equal([mockLogin]);
    });
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

  describe("browser.experiments.logins.{set,get}LoginSavingEnabled", () => {
    const commonTest = async (button, expected) => {
      await loadTestPage();
      await clickButton(button ? "enable-saving" : "disable-saving");
      const results = await driver.wait(until.elementLocated(
        By.id("saving-results")
      ), 1000);
      await driver.wait(
        until.elementTextContains(
          results,
          expected ? "true" : "false"
        ),
        5000
      );
    };
    describe("with pref signon.rememberSignons = true", () => {
      before(async () => {
        await enableRememberSignons();
      });
      after(async () => {
        await disableRememberSignons();
      });
      it("disables login saving for origin when given false", async () => {
        await commonTest(false, false);
      });
      it("enables login saving for origin when given true", async () => {
        await commonTest(true, true);
      });
    });
    describe("with pref signon.rememberSignons = false", () => {
      before(async () => {
        await disableRememberSignons();
      });
      it("does not enable login saving for origin when given true", async () => {
        await commonTest(true, false);
      });
    });
  });

  describe("browser.experiments.logins.{get,set}ManagementURI", () => {
    const commonTest = async (button, expected) => {
      await loadTestPage();
      await clickButton(button ? "register-management-uri" : "unregister-management-uri");
      const results = await driver.wait(until.elementLocated(
        By.id("management-uri-results")
      ), 1000);

      const output = await results.getText();
      expect(JSON.parse(output)).to.equal(expected);

      const actual = await getPrefManagementURI();
      expect(actual).to.equal(expected);
    };

    it("registers test page location as management URI", async () => {
      const expected = webext.url(TEST_PAGE_URL);
      await commonTest(true, expected);
    });
    it("unregistered test page location as management URI", async () => {
      const expected = "";
      await commonTest(false, expected);
    });
  });

  describe("browser.experiments.logins.onAdded", () => {
    it("should fire if the mock login is added", async () => {
      await loadTestPage();
      await clickButton("register-listeners");

      await addLogin();

      const output = JSON.parse(await getListenerResults());
      expect(output.length).to.equal(1);
      expect(output[0]).to.deep.equal(["onAdded", { login: mockLogin }]);
    });

    it("should not fire if the mock sync login is added", async () => {
      await loadTestPage();
      await clickButton("register-listeners");

      // If this is working correctly, nothing will happen when the sync login
      // is added--but getListenerResults() will then time out, because the
      // results element in the DOM will never have anything inserted into it.
      // To avoid hitting the timeout each time, instead add a regular login
      // after adding the sync login, then verify that the results list only
      // contains one event (the "onAdded" event for the regular login).
      await addSyncLogin();
      await addLogin();

      const output = JSON.parse(await getListenerResults());
      expect(output.length).to.equal(1);
      expect(output[0]).to.deep.equal(["onAdded", { login: mockLogin }]);
    });
  });

  describe("browser.experiments.logins.onUpdated", () => {
    it("should fire if the mock login is updated", async () => {
      await loadTestPage();
      await addLogin();
      await clickButton("register-listeners");

      await clickButton("update");

      const output = JSON.parse(await getListenerResults());
      expect(output.length).to.equal(1);
      const expected = Object.assign({}, mockLogin, { username: "updated"});
      expect(output[0]).to.deep.equal(["onUpdated", { login: expected }]);
    });

    it("should not fire if the mock sync login is updated", async () => {
      await loadTestPage();
      await addSyncLogin();
      await clickButton("register-listeners");

      await updateSyncLogin();
      await addLogin();

      const output = JSON.parse(await getListenerResults());
      expect(output.length).to.equal(1);
      expect(output[0]).to.deep.equal(["onAdded", { login: mockLogin }]);
    });
  });

  describe("browser.experiments.logins.onRemoved", () => {
    it("should fire if the mock login is removed", async () => {
      await loadTestPage();
      await addLogin();
      await clickButton("register-listeners");

      await clickButton("remove");

      const output = JSON.parse(await getListenerResults());
      expect(output.length).to.equal(1);
      expect(output[0]).to.deep.equal(["onRemoved", { login: mockLogin }]);
    });

    it("should not fire if the mock sync login is removed", async () => {
      await loadTestPage();
      await addSyncLogin();
      await clickButton("register-listeners");

      await removeSyncLogin();
      await addLogin();

      const output = JSON.parse(await getListenerResults());
      expect(output.length).to.equal(1);
      expect(output[0]).to.deep.equal(["onAdded", { login: mockLogin }]);
    });
  });
});
