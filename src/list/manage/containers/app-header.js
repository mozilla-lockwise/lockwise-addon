/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { classNames } from "../../../common";
import {
  selectTabLogins,
  selectTabMonitor,
  openFAQ,
  openFeedback,
  openGetMobile,
  openSyncPrefs,
  openProfileMenu,
} from "../../actions";

import styles from "./app-header.css";

export class AppHeader extends React.Component {
  static get propTypes() {
    return {
      profile: PropTypes.object,
      hasProfile: PropTypes.bool.isRequired,
      selectedTab: PropTypes.string.isRequired,
      onClickTabLogins: PropTypes.func.isRequired,
      onClickTabMonitor: PropTypes.func.isRequired,
      onClickMenuFeedback: PropTypes.func.isRequired,
      onClickMenuFAQ: PropTypes.func.isRequired,
      onClickMenuConnect: PropTypes.func.isRequired,
      onClickMenuAccount: PropTypes.func.isRequired,
      onClickMenuSignIn: PropTypes.func.isRequired,
      onClickMenuProfile: PropTypes.func.isRequired,
      document: PropTypes.any,
    };
  }

  constructor(props) {
    super(props);
    this.menuButtonNode = null;
    this.menuNode = null;
    this.state = {
      profileMenuShown: false,
    };
    [
      "toggleProfileMenu",
      "showProfileMenu",
      "hideProfileMenu",
      "handleGlobalClick",
      "handleGlobalKeydown",
      "handleTabClick",
    ].forEach(name => (this[name] = this[name].bind(this)));
  }

  componentWillMount() {
    const { document = window.document } = this.props;
    document.addEventListener("mousedown", this.handleGlobalClick);
    document.addEventListener("keydown", this.handleGlobalKeydown);
  }

  componentWillUnmount() {
    const { document = window.document } = this.props;
    document.removeEventListener("mousedown", this.handleGlobalClick);
    document.removeEventListener("keydown", this.handleGlobalKeydown);
  }

  handleGlobalClick(e) {
    if (
      this.state.profileMenuShown &&
      this.menuButtonNode &&
      this.menuNode &&
      !this.menuButtonNode.contains(e.target) &&
      !this.menuNode.contains(e.target)
    ) {
      this.hideProfileMenu();
    }
  }

  handleGlobalKeydown(e) {
    if (this.state.profileMenuShown && e.key === "Escape") {
      this.hideProfileMenu();
    }
  }

  handleTabClick(name) {
    const { onClickTabLogins, onClickTabMonitor } = this.props;
    return e => {
      switch (name) {
        case "monitor":
          return onClickTabMonitor();
        default:
          return onClickTabLogins();
      }
    };
  }

  toggleProfileMenu() {
    const { onClickMenuProfile } = this.props;
    this.setState(state => ({ profileMenuShown: !state.profileMenuShown }));
    onClickMenuProfile();
  }

  showProfileMenu() {
    this.setState({ profileMenuShown: true });
  }

  hideProfileMenu() {
    this.setState({ profileMenuShown: false });
  }

  render() {
    const {
      profile,
      hasProfile,
      selectedTab,
      onClickMenuFeedback,
      onClickMenuFAQ,
      onClickMenuConnect,
      onClickMenuAccount,
      onClickMenuSignIn,
    } = this.props;

    const { profileMenuShown } = this.state;

    return (
      <header className={styles.appHeader}>
        <nav className={styles.appHeaderMenuTabs}>
          <ul>
            <li
              className={classNames([
                selectedTab === "logins" && styles.appHeaderMenuTabSelected,
              ])}
            >
              <Localized id="header-logins-button">
                <button className="tabLogins" onClick={this.handleTabClick("logins")}>Logins</button>
              </Localized>
            </li>
            {/* TODO: Re-enable as part of issue #15
            <li
              className={classNames([
                selectedTab === "monitor" && styles.appHeaderMenuTabSelected,
              ])}
            >
              <Localized id="header-monitor-button">
                <button className="tabMonitor" onClick={this.handleTabClick("monitor")}>Monitor</button>
              </Localized>
            </li>
            */}
          </ul>
        </nav>

        <h1 className={styles.appHeaderTitle}>
          <b>Firefox</b> Lockbox
        </h1>

        <nav className={styles.appHeaderProfileStatus}>
          <button
            id="avatar"
            ref={node => (this.menuButtonNode = node)}
            onClick={this.toggleProfileMenu}
          >
            {hasProfile ? (
              <React.Fragment>
                <span data-profile-id={profile.id}>{profile.displayName || profile.email}</span>
                <img src={profile.avatar} />
              </React.Fragment>
            ) : (
              <img id="logged-out-avatar" src="/images/logged-out-avatar.png" />
            )}
          </button>
        </nav>

        {profileMenuShown && (
          <nav
            id="profile-menu"
            ref={node => (this.menuNode = node)}
            className={styles.appHeaderProfileMenu}
          >
            <ul>
              {hasProfile ? (
                <li>
                  <Localized id="profile-menu-account">
                    <button name="menuAccount" className={styles.menuAccount } onClick={onClickMenuAccount}>aCCOUNt</button>
                  </Localized>
                </li>
              ) : (
                <li>
                  <Localized id="profile-menu-sign-in">
                    <button name="menuSignIn" className={styles.menuSignIn} onClick={onClickMenuSignIn}>sIGn iNTo sYNc</button>
                  </Localized>
                </li>
              )}
              <li>
                <Localized id="profile-menu-connect">
                  <button name="menuConnect" className={styles.menuConnect} onClick={onClickMenuConnect}>cONNECt A dEVICe</button>
                </Localized>
              </li>
              <li>
                <Localized id="profile-menu-faq">
                  <button name="menuFAQ" className={styles.menuFaq} onClick={onClickMenuFAQ}>faq</button>
                </Localized>
              </li>
              <li>
                <Localized id="profile-menu-feedback">
                  <button name="menuFeedback" className={styles.menuFeedback} onClick={onClickMenuFeedback}>
                    pROVIDe fEEDBACk
                  </button>
                </Localized>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

export default connect(
  ({
    app: {
      tabs: {
        selectedTab,
      },
      profileWrap: {
        profile,
        hasProfile,
      },
    },
  }) => ({
    selectedTab,
    profile,
    hasProfile,
  }),
  dispatch => ({
    onClickTabLogins: () => dispatch(selectTabLogins()),
    onClickTabMonitor: () => dispatch(selectTabMonitor()),
    onClickMenuFAQ: () => dispatch(openFAQ()),
    onClickMenuFeedback: () => dispatch(openFeedback()),
    onClickMenuConnect: () => dispatch(openGetMobile()),
    onClickMenuAccount: () => dispatch(openSyncPrefs("accountSettings")),
    onClickMenuSignIn: () => dispatch(openSyncPrefs("signinSync")),
    onClickMenuProfile: () => dispatch(openProfileMenu()),
  })
)(AppHeader);
