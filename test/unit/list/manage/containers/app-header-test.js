/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import sinon from "sinon";
import React from "react";
import mountWithL10n from "test/unit/mocks/l10n";

import { AppHeader } from "src/list/manage/containers/app-header";

describe("list > manage > containers > <AppHeader/>", () => {
  let mockHandlers, mockDocument, listeners;

  beforeEach(() => {
    listeners = {};
    mockDocument = {
      addEventListener: (name, fn) => listeners[name] = fn,
      removeEventListener: (name, fn) => delete listeners[name],
    };
    mockHandlers = {};
    [
      "MenuFeedback",
      "MenuFAQ",
      "MenuConnect",
      "MenuAccount",
      "MenuSignIn",
      "MenuProfile",
    ].forEach(name => mockHandlers[`onClick${name}`] = sinon.spy());
  });

  const makeSubject = props => mountWithL10n(
    <AppHeader {...props} />
  );

  const expectCommonMenuItems = (subject, variant = "Account") => {
    const avatarButton = subject.find("button#avatar");
    avatarButton.simulate("click");
    [
      "Connect",
      "FAQ",
      "Feedback",
      variant,
    ].forEach(name => {
      const button = subject.find(`button[name="menu${name}"]`);
      expect(button.length).to.equal(1);
      button.simulate("click");
      expect(mockHandlers[`onClickMenu${name}`].called).to.be.true;
    });
  };

  describe("logged out", () => {
    let subject, mockProps;

    beforeEach(() => {
      mockProps = {
        ...mockHandlers,
        document: mockDocument,
        hasProfile: false,
        profile: null,
      };
      subject = makeSubject(mockProps);
    });

    it("displays an empty avatar", () => {
      const avatar = subject.find("img#logged-out-avatar");
      expect(avatar.length).to.equal(1);
    });

    it("presents the menu when the avatar is clicked", () => {
      const avatarButton = subject.find("button#avatar");
      expect(avatarButton.length).to.equal(1);
      expect(subject.find("#profile-menu").length).to.equal(0);
      expect(subject.state("profileMenuShown")).to.be.false;
      avatarButton.simulate("click");
      expect(subject.find("#profile-menu").length).to.equal(1);
      expect(subject.state("profileMenuShown")).to.be.true;
    });

    it("offers the correct menu items", () => {
      expectCommonMenuItems(subject, "SignIn");
    });

    it("dismisses the menu when escape is pressed", () => {
      const avatarButton = subject.find("button#avatar");
      expect(avatarButton.length).to.equal(1);
      avatarButton.simulate("click");
      expect(subject.state("profileMenuShown")).to.be.true;
      expect(listeners.mousedown).to.not.be.undefined;
      listeners.keydown({ key: "Escape" });
      expect(subject.state("profileMenuShown")).to.be.false;
    });

    it("dismisses the menu on a click outside the component", () => {
      const avatarButton = subject.find("button#avatar");
      expect(avatarButton.length).to.equal(1);
      avatarButton.simulate("click");
      expect(subject.state("profileMenuShown")).to.be.true;
      expect(listeners.mousedown).to.not.be.undefined;
      listeners.mousedown({ target: null });
      expect(subject.state("profileMenuShown")).to.be.false;
    });
  });

  describe("logged in", () => {
    let subject, mockProps;

    beforeEach(() => {
      mockProps = {
        ...mockHandlers,
        document: mockDocument,
        selectedTab: "logins",
        hasProfile: true,
        profile: {
          id: "8675309",
          avatar: "https://example.com/avatar",
          displayName: "John Doe",
          email: "john.doe@example.com",
        },
      };
      subject = makeSubject(mockProps);
    });

    it("displays the appropriate avatar", () => {
      expect(subject.find("img#logged-out-avatar").length).to.equal(0);
      expect(subject.find("button#avatar span").text())
        .to.equal(mockProps.profile.displayName);
      expect(subject.find("button#avatar img").prop("src"))
        .to.equal(mockProps.profile.avatar);
    });

    it("falls back to email address when display name missing", () => {
      subject.setProps({
        profile: {
          ...mockProps.profile,
          displayName: null,
        },
      });
      expect(subject.find("button#avatar span").text())
        .to.equal(mockProps.profile.email);
    });

    it("offers the correct menu items", () => {
      expectCommonMenuItems(subject, "Account");
    });
  });
});
