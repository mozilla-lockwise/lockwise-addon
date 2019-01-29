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

// Note: Update these selectors if the DOM changes in components
const makeSelectors = ({ By }) => ({
  panelButton: By.id(`PanelUI-webext-${ident}-browser-action-view`),
  addItemButton: By.id("addItemButton"),
  deleteItemButton: By.id("itemDelete"),
  confirmDialogConfirmButton: By.css(".dialogConfirm"),
  confirmDialogCancelButton: By.css(".dialogCancel"),
  newItemForm: By.id("newItemForm"),
  newItemFormField: name => By.css(`#newItemForm input[name=${name}]`),
  newItemFormSubmit: By.css("#newItemForm button[type=submit]"),
  itemDetails: name => By.css(`span[data-name=${name}]`),
  itemListEmpty: By.css(".itemListEmpty"),
  itemList: By.css(".itemList"),
  itemListFirstItem: By.css(".itemList li"),
  listItemContainer: By.css(".itemList li[data-selected=true] > div"),
  listItemSelected: By.css(".itemList li[data-selected=true]"),
  listItemSelectedSubtitle: By.css(".itemList li[data-selected=true] div[data-name=subtitle]"),
  listItemSubtitle: By.css(".itemList li div[data-name=subtitle]"),
  popupManageButton: By.css("footer button"),
});

// TODO: share with logins-api-test?
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

const WAIT_DELAY = 1000;

describe("add-on UI", () => {
  let webext, driver, helper, webdriver, By, until, selectors;

  const waitFor = by => driver.wait(until.elementLocated(by), WAIT_DELAY);

  const waitUntilMissing = by => driver.wait(
    async () => {
      try {
        await driver.findElement(by);
        return false;
      } catch (err) {
        return true;
      }
    },
    WAIT_DELAY
  );

  const clearLogins = async () => {
    await webext.inChrome();
    await driver.executeScript(`
      Services.logins.removeAllLogins();
    `);
    await webext.inContent();
  };

  const addLogin = async (loginItem) => {
    await webext.inChrome();
    await driver.executeScript(`
      const mockLogin = ${JSON.stringify(loginItem)};
      const login = LoginHelper.vanillaObjectToLogin(mockLogin);
      Services.logins.addLogin(login);
    `);
    await webext.inContent();
  };

  const getLogins = async () => {
    await webext.inChrome();
    const logins = await driver.executeScript(`
      return Services.logins
        .getAllLogins()
        .map(LoginHelper.loginToVanillaObject);
    `);
    await webext.inContent();
    return logins;
  };

  before(async () => {
    webext = await getWebExtension();
    await webext.start();
    driver = await webext.driver;
    webdriver = webext.webdriver;
    By = webdriver.By;
    until = webdriver.until;
    helper = createHelper(webext);
    selectors = makeSelectors({ By });

    await webext.inChrome();
    await driver.executeScript(`
      ChromeUtils.defineModuleGetter(this, "LoginHelper",
                                     "resource://gre/modules/LoginHelper.jsm");
      ChromeUtils.defineModuleGetter(this, "Services",
                                     "resource://gre/modules/Services.jsm");
    `);
  });

  after(async () => {
    await webext.stop();
  });

  describe("toolbar", () => {
    it("has a toolbar button", async () => {
      await webext.inChrome();
      const button = await helper.toolbar();
      expect(button.getAttribute("tooltiptext")).eventually.to.equal("Lockbox");
    });

    it("opens the doorhanger", async () => {
      await webext.inChrome();
      const button = await helper.toolbar();
      const doorhanger = await driver.wait(
        until.elementLocated(selectors.panelButton),
        1000,
      );
      expect(doorhanger).to.not.be.null;
      button.click();
    });
  });

  describe("management page", () => {
    before(async () => {
      await webext.inContent();
      await helper.management();
    });

    beforeEach(async () => {
      await clearLogins();
    });

    const addItem = async (expected) => {
      // Click the "+" button to add a new item.
      const addButton = await waitFor(selectors.addItemButton);
      expect(addButton).to.not.be.null;
      await addButton.click();

      // The new item form should be summoned.
      const newItemForm = await waitFor(selectors.newItemForm);
      expect(newItemForm).to.not.be.null;

      // Grab the new item form fields.
      const fields = {
        origin: await waitFor(selectors.newItemFormField("origin")),
        username: await waitFor(selectors.newItemFormField("username")),
        password: await waitFor(selectors.newItemFormField("password")),
      };

      // Fill out the fields with expected item details.
      for (let [name, field] of Object.entries(fields)) {
        await field.sendKeys(expected[name]);
      }

      // Submit the fields.
      const submitButton = await waitFor(selectors.newItemFormSubmit);
      await submitButton.click();
    };

    it("can add a new item", async () => {
      const expected = {
        origin: "https://foo.example.com",
        username: "testUser",
        password: "testPassword",
      };
      await addItem(expected);

      // Verify visible Entry Details
      const resultElements = {
        origin: await waitFor(selectors.itemDetails("origin")),
        username: await waitFor(selectors.itemDetails("username")),
      };
      for (let [name, el] of Object.entries(resultElements)) {
        const text = await el.getText();
        expect(text).to.equal(expected[name]);
      }

      // Verify visible info in the item list.
      const listItemSubtitle = await waitFor(selectors.listItemSelectedSubtitle);
      expect(await listItemSubtitle.getText()).to.equal(expected.username);
    });

    const commonItemDelete = async () => {
      const expected = {
        origin: "https://foo.example.com",
        username: "testUser",
        password: "testPassword",
      };
      await addItem(expected);

      // Verify visible info in the item list.
      const listItem = await waitFor(selectors.listItemContainer);
      listItem.click();

      const deleteItemButton = await waitFor(selectors.deleteItemButton);
      deleteItemButton.click();
    };

    it("can delete an existing item", async () => {
      await commonItemDelete();
      const confirmButton = await waitFor(selectors.confirmDialogConfirmButton);
      confirmButton.click();
      await waitUntilMissing(selectors.listItemContainer);
    });

    it("can cancel deleting an existing item", async () => {
      await commonItemDelete();
      const confirmButton = await waitFor(selectors.confirmDialogCancelButton);
      confirmButton.click();
      await waitFor(selectors.listItemContainer);
    });
  });

  describe("doorhanger", () => {
    let popup;

    before(async () => {
      await webext.inContent();
      popup = await helper.popup();
    });

    beforeEach(async () => {
      await clearLogins();
    });

    it("lists logins", async () => {
      // Add the login, then wait for "No results" to disappear.
      await addLogin(mockLogin);
      await waitUntilMissing(selectors.itemListEmpty);
      await waitFor(selectors.itemList);

      const listItemSubtitle = await waitFor(selectors.listItemSubtitle);
      expect(await listItemSubtitle.getText()).to.equal(mockLogin.username);
    });

    it("displays login details on click", async () => {
      // Add the login, then wait for "No results" to disappear.
      await addLogin(mockLogin);
      await waitUntilMissing(selectors.itemListEmpty);
      await waitFor(selectors.itemList);

      const listItem = await waitFor(selectors.itemListFirstItem);
      listItem.click();

      // Verify visible Entry Details
      const resultElements = {
        title: await waitFor(selectors.itemDetails("title")),
        username: await waitFor(selectors.itemDetails("username")),
      };
      expect(await resultElements.title.getText()).to.equal("example.com");
      expect(await resultElements.username.getText()).to.equal(mockLogin.username);
    });

    it("has a button that opens the full-tab management page", async () => {
      // Look for the button
      const manageButton = await popup.findElement(
        selectors.popupManageButton
        // By.css("footer button")
      );
      expect(manageButton).to.not.be.null;

      // Click the button, wait for a new tab to appear.
      const beforeHandles = await driver.getAllWindowHandles();
      manageButton.click();
      const newHandle = await driver.wait(
        async () =>
          (await driver.getAllWindowHandles())
            .filter(h => !beforeHandles.includes(h))
            .pop(),
        1000,
      );

      // Switch to the new tab.
      await driver.switchTo().window(newHandle);

      // This new tab should have our management page URL.
      expect(await driver.getCurrentUrl()).to.equal(
        webext.url("/list/manage.html"),
      );
    });
  });
});
