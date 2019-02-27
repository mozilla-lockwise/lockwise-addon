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
  deleteItemButton: By.id("deleteItemButton"),
  editItemButton: By.id("editItemButton"),
  editItemCancelButton: By.id("editItemCancelButton"),
  confirmDialogConfirmButton: By.css(".dialogConfirm"),
  confirmDialogCancelButton: By.css(".dialogCancel"),
  editItemForm: By.id("editItemForm"),
  newItemForm: By.id("newItemForm"),
  itemFormField: name => By.css(`input[name=${name}]`),
  itemFormSubmit: By.css("button[type=submit]"),
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
      await button.click();

      const doorhanger = await driver.wait(
        until.elementLocated(selectors.panelButton),
        1000,
      );
      expect(doorhanger).to.not.be.null;
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

    const itemToAdd = {
      origin: "https://foo.example.com",
      username: "testUser",
      password: "testPassword",
    };

    const addItem = async (itemToAdd, doSubmit = true) => {
      // Click the "+" button to add a new item.
      const addButton = await waitFor(selectors.addItemButton);
      expect(addButton).to.not.be.null;
      await addButton.click();

      // The new item form should be summoned.
      const newItemForm = await waitFor(selectors.newItemForm);
      expect(newItemForm).to.not.be.null;

      // Grab the new item form fields.
      const fields = {
        origin: await waitFor(selectors.itemFormField("origin")),
        username: await waitFor(selectors.itemFormField("username")),
        password: await waitFor(selectors.itemFormField("password")),
      };

      // Fill out the fields with itemToAdd item details.
      for (let [name, field] of Object.entries(fields)) {
        await field.sendKeys(itemToAdd[name]);
      }

      if (doSubmit) {
        // Submit the fields.
        const submitButton = await waitFor(selectors.itemFormSubmit);
        await submitButton.click();
      }
    };

    it("can add a new item", async () => {
      await addItem(itemToAdd);

      // Verify visible Entry Details
      const resultElements = {
        origin: await waitFor(selectors.itemDetails("origin")),
        username: await waitFor(selectors.itemDetails("username")),
      };
      for (let [name, el] of Object.entries(resultElements)) {
        const text = await el.getText();
        expect(text).to.equal(itemToAdd[name]);
      }

      // Verify visible info in the item list.
      const listItemSubtitle = await waitFor(selectors.listItemSelectedSubtitle);
      expect(await listItemSubtitle.getText()).to.equal(itemToAdd.username);
    });

    it("can cancel adding a new item without input", async () => {
      const addButton = await waitFor(selectors.addItemButton);
      expect(addButton).to.not.be.null;
      await addButton.click();

      const cancelButton = await waitFor(selectors.editItemCancelButton);
      await cancelButton.click();

      await waitUntilMissing(selectors.newItemForm);
    });

    it("requires confirmation to cancel adding a new item with input", async () => {
      await addItem(itemToAdd, false);

      const cancelButton = await waitFor(selectors.editItemCancelButton);
      await cancelButton.click();

      const confirmButton = await waitFor(selectors.confirmDialogConfirmButton);
      await confirmButton.click();

      await waitUntilMissing(selectors.newItemForm);
    });

    const editedFields = {
      origin: "https://bar.example.com",
      username: "userEdited",
      password: "passwordEdited",
    };

    const commonModify = async (doEdit = true) => {
      await addItem(itemToAdd);

      // Verify visible info in the item list.
      const listItem = await waitFor(selectors.listItemContainer);
      await listItem.click();

      const editItemButton = await waitFor(selectors.editItemButton);
      await editItemButton.click();

      const editItemForm = await waitFor(selectors.editItemForm);
      expect(editItemForm).to.not.be.null;

      if (doEdit) {
        const fields = {
          origin: await waitFor(selectors.itemFormField("origin")),
          username: await waitFor(selectors.itemFormField("username")),
          password: await waitFor(selectors.itemFormField("password")),
        };

        for (let [name, field] of Object.entries(fields)) {
          await field.clear();
          await field.sendKeys(editedFields[name]);
        }
      }
    };

    const commonModifyVerify = async (itemData) => {
      // Verify visible Entry Details
      const resultElements = {
        origin: await waitFor(selectors.itemDetails("origin")),
        username: await waitFor(selectors.itemDetails("username")),
      };
      for (let [name, el] of Object.entries(resultElements)) {
        const text = await el.getText();
        expect(text).to.equal(itemData[name]);
      }

      // Verify visible info in the item list.
      const listItemSubtitle = await waitFor(selectors.listItemSelectedSubtitle);
      expect(await listItemSubtitle.getText()).to.equal(itemData.username);
    };

    it("can cancel modification of an existing item without changes", async () => {
      await commonModify(false);

      const cancelButton = await waitFor(selectors.editItemCancelButton);
      await cancelButton.click();

      await commonModifyVerify(itemToAdd);
    });

    it("requires confirmation to cancel modification of an existing item with changes", async () => {
      await commonModify();

      const cancelButton = await waitFor(selectors.editItemCancelButton);
      await cancelButton.click();

      const confirmButton = await waitFor(selectors.confirmDialogConfirmButton);
      await confirmButton.click();

      await commonModifyVerify(itemToAdd);
    });

    it("can modify an existing item", async () => {
      await commonModify();

      const submitButton = await waitFor(selectors.itemFormSubmit);
      await submitButton.click();

      await commonModifyVerify(editedFields);
    });

    const commonItemDelete = async () => {
      await addItem(itemToAdd);

      // Verify visible info in the item list.
      const listItem = await waitFor(selectors.listItemContainer);
      await listItem.click();

      const deleteItemButton = await waitFor(selectors.deleteItemButton);
      await deleteItemButton.click();
    };

    it("can delete an existing item", async () => {
      await commonItemDelete();
      const confirmButton = await waitFor(selectors.confirmDialogConfirmButton);
      await confirmButton.click();
      await waitUntilMissing(selectors.listItemContainer);
    });

    it("can cancel deleting an existing item", async () => {
      await commonItemDelete();
      const cancelButton = await waitFor(selectors.confirmDialogCancelButton);
      await cancelButton.click();
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
      await listItem.click();

      // Verify visible Entry Details
      const resultElements = {
        origin: await waitFor(selectors.itemDetails("origin")),
        username: await waitFor(selectors.itemDetails("username")),
      };
      expect(await resultElements.origin.getText()).to.equal("example.com");
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
      await manageButton.click();
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
