/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

function webext2chrome(id) {
  return id.replace(/\.|@/g, "_");
}
export default function createHelper(webext) {
  const { driver, webdriver } = webext;
  const ident = webext2chrome(webext.id);

  return {
    async toolbar() {
      return driver.wait(webdriver.until.elementLocated(
        webdriver.By.id(`${ident}-browser-action`)
      ), 1000);
    },
    async management() {
      const url = webext.url("/list/manage.html");
      const { driver, webdriver } = webext;
      await driver.get(url);

      return driver.wait(webdriver.until.elementLocated(
        webdriver.By.css("main#content")
      ), 1000);
    },
  };
}

