/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getWebExtension from "./driver";
import AxeBuilder from "axe-webdriverjs";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

describe("accessibility", () => {
  let webext;
  let helper;

  before(async () => {
    webext = await getWebExtension();
    await webext.start();

    helper = {
      async home() {
        const url = webext.url("/list/manage.html");
        const { driver, webdriver } = webext;
        await driver.get(url);

        return driver.wait(webdriver.until.elementLocated(
          webdriver.By.css("main#content")
        ), 1000);
      },
    };
  });
  after(async () => {
    await webext.stop();
  });

  beforeEach(async () => {
    await webext.inContent();
  });

  it("tests homepage", async () => {
    await helper.home();

    return AxeBuilder(webext.driver).
      analyze();
  });
});
