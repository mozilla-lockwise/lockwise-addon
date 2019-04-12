/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import sinon from "sinon";
import sinonChai from "sinon-chai";

import mountWithL10n from "test/unit/mocks/l10n";
import IntroPage from "src/list/manage/components/intro-page";

chai.use(chaiEnzyme());
chai.use(sinonChai);

describe("list > manage > components > <IntroPage/>", () => {
  let wrapper, spyLearnMore;

  beforeEach(() => {
    spyLearnMore = sinon.spy();
    wrapper = mountWithL10n(
      <IntroPage onLearnMore={spyLearnMore}/>
    );
  });

  it("render introduction page", () => {
    expect(wrapper).to.have.descendants("go");
  });
});
