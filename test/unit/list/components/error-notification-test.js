/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";

import mountWithL10n from "test/unit/mocks/l10n";
import ErrorNotification from "src/list/components/error-notification";

chai.use(chaiEnzyme());

describe("list > components > <ErrorNotification/>", () => {
  let wrapper,
      props = {
        hasProfileNeedsAttn: false,
        isPanel: false,
      };

  beforeEach(() => {
    wrapper = mountWithL10n(
        <ErrorNotification {...props} />
    );
  });

  it("should not render if hasProfile and does not need attention", () => {
    expect(wrapper.find("p")).to.have.length(0);
  });

  it("should not render if hasProfileNeedsAttn is true", () => {
    props.hasProfileNeedsAttn = true;
    expect(wrapper.find("p")).to.have.length(1);
  });

  it("should render close button if not rendered in popup panel", () => {
    props.isPanel = true;
    props.hasProfileNeedsAttn = true;
    expect(wrapper.find("span")).to.have.length(1);
  });

  it("should not render close button if is rendered in popup panel", () => {
    props.isPanel = true;
    props.hasProfileNeedsAttn = true;
    expect(wrapper.find("span")).to.have.length(0);
  });
});
