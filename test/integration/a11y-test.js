/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import getWebExtension from "./driver";
import AxeBuilder from "axe-webdriverjs";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import chaiAxe from "./chai-axe";
import createHelper from "./helper";

chai.use(chaiAsPromised);
chai.use(chaiAxe);

describe("accessibility", () => {
  let webext;
  let helper;

  before(async () => {
    webext = await getWebExtension();
    await webext.start();
    helper = createHelper(webext);
  });
  after(async () => {
    await webext.stop();
  });

  beforeEach(async () => {
    await webext.inContent();
  });

  it("tests homepage", async () => {
    await helper.management();

    return AxeBuilder(webext.driver).
      analyze().
      then(results => {
        expect(results).violations("critial").to.deep.equal([]);
      });
  });
});
