/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import mountWithL10n from "test/unit/mocks/l10n";
import IntroPage from "src/list/manage/components/intro-page";

chai.use(chaiEnzyme());

describe("list > manage > components > <IntroPage/>", () => {
  it("render introduction page", () => {
    const wrapper = mountWithL10n(
      <IntroPage/>
    );

    expect(wrapper).to.have.descendants("a[href='https://lockbox.firefox.com/faq.html#how-do-i-get-my-saved-logins-into-firefox-lockbox']");
  });
});
