/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import sinon from "sinon";

import "test/unit/mocks/browser";

import {
  updateProfileInfo,
  initializeProfileInfo,
  getProfileInfo,
} from "src/background/profile";

describe("background > profile", () => {
  const mockProfile = {
    id: "8675309",
    avatar: "https://example.com/avatar",
    displayName: "John Doe",
    email: "john.doe@example.com",
  };

  it("manages a cached profile data object", () => {
    updateProfileInfo(mockProfile);
    expect(getProfileInfo()).to.deep.equal(mockProfile);
  });

  it("listens for profile changes on initialization", async () => {
    sinon.stub(browser.experiments.sync, "getUserProfileInfo").resolves(mockProfile);
    await initializeProfileInfo();
    expect(getProfileInfo()).to.deep.equal(mockProfile);
    const updatedProfile = { ...mockProfile, displayName: "Jane Doe" };
    browser.experiments.sync.onUserProfileChanged.getListener()(updatedProfile);
    expect(getProfileInfo()).to.deep.equal(updatedProfile);
  });
});
