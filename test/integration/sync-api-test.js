/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getWebExtension from "./driver";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

describe("sync API", () => {
  let webext, driver, testpage, webdriver, By, until;

  const clickButton = async (id) => {
    await webext.inContent();
    const button = await driver.wait(until.elementLocated(By.id(id)), 5000);
    await button.click();
  };

  const getResults = async (id) => {
    await webext.inContent();
    const results = await driver.wait(until.elementLocated(By.id(id)), 5000);
    await driver.wait(until.elementTextMatches(results, /[a-z]/));
    const output = results.getText();
    return output;
  };

  const loadTestPage = async () => {
    await webext.inContent();
    await driver.get(webext.url("/test/integration/test-pages/sync-api.html"));
    testpage = await driver.getWindowHandle();
  };


  const getProfileInfo = async () => {
    await clickButton("get-profile-info");
    const profileInfo = await getResults("get-profile-info-results");
    return profileInfo;
  };

  const registerOnUserProfileChangedListener = async () => {
    await clickButton("register-listener");
  };

  const getUserProfileChangedEvents = async () => {
    const results = await getResults("register-listener-results");
    return results;
  };

  const getPasswordsPref = async () => {
    await clickButton("check-passwords-pref");
    const output = await getResults("check-passwords-pref-results");
    return output;
  };

  const openSyncPrefs = async () => {
    await clickButton("open-sync-prefs");
  };

  const findAndCloseSyncPrefs = async () => {
    await webext.inContent();
    let found = false;

    let handles = await driver.getAllWindowHandles();
    for (let h of handles) {
      await driver.switchTo().window(h);
      const url = await driver.getCurrentUrl();
      if (url.startsWith("about:preferences") && url.endsWith("#sync")) {
        found = true;
        await driver.close();
      }
    }

    await driver.switchTo().window(testpage);

    return found;
  };

  // Force an update of the UIState. This method exists on the UIState API to
  // aid with rapid state transitions during testing.
  const refreshUIState = async () => {
    await webext.inChrome();
    await driver.executeAsyncScript(`(async () => {
      ChromeUtils.defineModuleGetter(this, "UIState",
                                     "resource://services-sync/UIState.jsm");
      await UIState.refresh();
    })().then(arguments[0]);
    `);
  };

  // Fire the Firefox-internal event that causes the onUserProfileChanged API
  // to fire (if the UIState has changed).
  const triggerInternalSyncEvent = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      Services.obs.notifyObservers(null, "sync-ui-state:update");
    `);
  };

  /**
   * The existing Firefox test code mocks out the UIState by setting the
   * UIState._internal.fxAccounts values, then calling UIState.refresh()
   * to trigger updates based on the mock data. The following helper methods
   * are used to take the same approach in our tests.
   *
   * Reference: https://searchfox.org/mozilla-central/source/services/sync/tests/unit/test_uistate.js
   */

  // Mock out the logged in case, with default values.
  const setLoggedIn = async () => {
    await webext.inChrome();
    await driver.executeAsyncScript(`(async () => {
      const testTime = new Date("January 1, 2019");
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      Services.prefs.setCharPref("services.sync.lastSync", testTime);
      UIState._internal.syncing = false;

      UIState._internal.fxAccounts = {
        getSignedInUser: () => Promise.resolve({
          uid: "0123456789abcdef0123456789abcdef",
          verified: true,
          email: "foo@example.com",
        }),
        // Use the defaults for displayName and avatarURL, to ensure we
        // handle them correctly.
        getSignedInUserProfile: () => Promise.resolve({
          displayName: undefined,
          uid: "0123456789abcdef0123456789abcdef",
          avatar: "https://firefoxusercontent.com/00000000000000000000000000000000",
        }),
        hasLocalSession: () => Promise.resolve(true),
      };

      await UIState.refresh();
    })().then(arguments[0]);
    `);
  };

  // Mock out the state where the user is logged out or has never logged in.
  const setNotConfigured = async () => {
    await webext.inChrome();
    await driver.executeAsyncScript(`(async () => {
      const testTime = new Date("January 1, 2019");
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      Services.prefs.setCharPref("services.sync.lastSync", testTime);
      UIState._internal.syncing = false;

      UIState._internal.fxAccounts = {
        getSignedInUser: () => Promise.resolve(null),
        getSignedInUserProfile: () => Promise.resolve(null),
      };

      await UIState.refresh();
    })().then(arguments[0]);
    `);
  };

  // Mock out the state where the user is logged in, but the password was
  // changed on another device.
  const setLoginFailed = async () => {
    await webext.inChrome();
    await driver.executeAsyncScript(`(async () => {
      const testTime = new Date("January 1, 2019");
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      Services.prefs.setCharPref("services.sync.lastSync", testTime);
      UIState._internal.syncing = false;

      Services.prefs.setStringPref("services.sync.username", "foo@example.com");
      UIState._internal.fxAccounts = {
        getSignedInUser: () => Promise.resolve({
          email: "foo@example.com",
          uid: "0123456789abcdef0123456789abcdef",
          verified: true,
        }),
        getSignedInUserProfile: () => Promise.resolve(null),
        hasLocalSession: () => Promise.resolve(),
      };

      await UIState.refresh();
    })().then(arguments[0]);
    `);
  };

  // Mock out the state where the user is logged in, but the email is
  // unverified.
  const setNotVerified = async () => {
    await webext.inChrome();
    await driver.executeAsyncScript(`(async () => {
      const testTime = new Date("January 1, 2019");
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      Services.prefs.setCharPref("services.sync.lastSync", testTime);
      UIState._internal.syncing = false;

      UIState._internal.fxAccounts = {
        getSignedInUser: () => Promise.resolve({
          verified: false,
          uid: "0123456789abcdef0123456789abcdef",
          email: "foo@example.com",
        }),
        getSignedInUserProfile: () => Promise.resolve(null),
        hasLocalSession: () => Promise.resolve(true),
      };

      await UIState.refresh();
    })().then(arguments[0]);
    `);
  };

  const MockUserProfileInfo = {
    loggedIn: {
      status: "ok",
      avatar: "https://firefoxusercontent.com/00000000000000000000000000000000",
      email: "foo@example.com",
      id: "0123456789abcdef0123456789abcdef",
      displayName: null,
      syncEnabled: true,
    },
    error: {
      status: "error",
      avatar: null,
      email: "foo@example.com",
      id: "0123456789abcdef0123456789abcdef",
      displayName: null,
      syncEnabled: true,
    },
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
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      ChromeUtils.import("resource://services-sync/UIState.jsm");
    `);
  });

  after(async () => {
    await webext.stop();
  });

  afterEach(async () => {
    await webext.inChrome();
    await driver.executeScript(`
      ChromeUtils.import("resource://gre/modules/Services.jsm");
      ChromeUtils.import("resource://services-sync/UIState.jsm");
      Services.prefs.clearUserPref("services.sync.lastSync");
      Services.prefs.clearUserPref("services.sync.username");
      UIState._internal.fxAccounts = window.fxAccountsOrig;
      UIState.reset();
    `);
  });

  describe("browser.experiments.sync.getCurrentState", () => {
    it("should correctly check the state of logins sync ", async () => {
      await webext.inChrome();
      driver.executeScript(`
        ChromeUtils.import("resource://gre/modules/Services.jsm");
        Services.prefs.setBoolPref("services.sync.engine.passwords", false);
      `);
      await refreshUIState();
      await loadTestPage();
      let result = await getPasswordsPref();
      expect(JSON.parse(result)).to.be.false;

      await webext.inChrome();
      driver.executeScript(`
        ChromeUtils.import("resource://gre/modules/Services.jsm");
        Services.prefs.setBoolPref("services.sync.engine.passwords", true);
      `);
      await refreshUIState();
      result = await getPasswordsPref();
      expect(JSON.parse(result)).to.be.true;
    });
  });

  describe("browser.experiments.sync.openPreferences", () => {
    beforeEach(async () => {
    });

    it("should open FxA/sync preference page when not configured", async () => {
      await setNotConfigured();
      await loadTestPage();
      await openSyncPrefs();
      const found = await findAndCloseSyncPrefs();
      expect(found).to.equal(true);
    });

    it("should open FxA/sync preference page when signed-in", async () => {
      await setLoggedIn();
      await loadTestPage();
      await openSyncPrefs();
      const found = await findAndCloseSyncPrefs();
      expect(found).to.equal(true);
    });

    it("should open FxA/sync preference page when there's a problem", async () => {
      await setLoginFailed();
      await loadTestPage();
      await openSyncPrefs();
      const found = await findAndCloseSyncPrefs();
      expect(found).to.equal(true);
    });
  });

  describe("browser.experiments.sync.getUserProfileInfo", () => {
    beforeEach(async () => {
      await webext.inContent();
    });

    it("should return null if the user is not logged in", async () => {
      await setNotConfigured();
      await loadTestPage();
      const profileInfo = await getProfileInfo();
      expect(JSON.parse(profileInfo)).to.be.null;
    });
    it("should return profile info, if the user is logged in", async () => {
      await setLoggedIn();
      await loadTestPage();
      const profileInfo = await getProfileInfo();
      expect(JSON.parse(profileInfo)).to.deep.equal(MockUserProfileInfo.loggedIn);
    });
    it("should return a profile with correct email and error status, if the user's login is stale", async () => {
      await setLoginFailed();
      await loadTestPage();
      const profileInfo = await getProfileInfo();
      expect(JSON.parse(profileInfo)).to.deep.equal(MockUserProfileInfo.error);
    });
    it("should return a profile with correct email and error status, if the user's email is unverified", async () => {
      await setNotVerified();
      await loadTestPage();
      const profileInfo = await getProfileInfo();
      expect(JSON.parse(profileInfo)).to.deep.equal(MockUserProfileInfo.error);
    });
  });

  describe("browser.experiments.sync.onUserProfileChanged", () => {
    it("should notify observers when the internal sync event fires", async () => {
      // This test simulates two aspects of Firefox Sync code behavior.
      // In production, when the FxA/Sync state changes, the Firefox Sync code
      // both updates the UIState, and fires a "sync-ui-state:update" internal
      // (nsIObserver) event. Note that the Firefox Sync code fires multiple
      // internal events for a single FxA/Sync state change. The Lockbox sync
      // API listens for this internal "sync-ui-state:update" event, filters
      // out duplicate events by comparing the new UIState against the previous
      // UIState, then notifies onUserProfileChanged observers if the state
      // has really changed. To test this effectively, we need to both simulate
      // a legit UIState change, and also fire the "sync-ui-state:update"
      // event to trigger the update process.
      await loadTestPage();
      await registerOnUserProfileChangedListener();

      await setLoggedIn();
      await refreshUIState();
      await triggerInternalSyncEvent();

      const events = await getUserProfileChangedEvents();
      expect(JSON.parse(events)).to.deep.equal([MockUserProfileInfo.loggedIn]);
    });
  });
});
