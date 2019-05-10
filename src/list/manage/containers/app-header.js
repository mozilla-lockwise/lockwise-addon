/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  openFAQ,
  openFeedback,
  openGetMobile,
  openSyncPrefs,
  openProfileMenu,
} from "../../actions";
import AddItem from "../containers/add-item";
import ItemFilter from "../../containers/item-filter";

import styles from "./app-header.css";

export class AppHeader extends React.Component {
  static get propTypes() {
    return {
      store: PropTypes.object,
      profile: PropTypes.object,
      hasProfile: PropTypes.bool.isRequired,
      inputRef: PropTypes.func,
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
      store,
      profile,
      hasProfile,
      inputRef,
      onClickMenuFeedback,
      onClickMenuFAQ,
      onClickMenuConnect,
      onClickMenuAccount,
      onClickMenuSignIn,
    } = this.props;

    const { profileMenuShown } = this.state;
    const logoSrc = browser.extension.getURL("/images/logo-lockwise.svg");

    return (
      <header className={styles.appHeader}>
        <h1 className={styles.appHeaderTitle}>
          <Localized id="header-app-title" attrs={{ title: true }}>
            <img src={logoSrc} alt="fIREFOx lOCKWISe" />
          </Localized>
        </h1>

        <div className={styles.appHeaderSearch}>
          <ItemFilter inputRef={inputRef} store={store}/>
          <AddItem store={store}/>
        </div>

        <nav className={styles.appHeaderProfileStatus}>
          <button
            id="avatar"
            ref={node => (this.menuButtonNode = node)}
            onClick={this.toggleProfileMenu}
          >
            {hasProfile ? (
              <React.Fragment>
                <span data-profile-id={profile.id}>{profile.displayName || profile.email}</span>
                <img src={profile.avatar} title={profile.displayName || profile.email}/>
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
      profileWrap: {
        profile,
        hasProfile,
      },
    },
  }) => ({
    profile,
    hasProfile,
  }),
  dispatch => ({
    onClickMenuFAQ: () => dispatch(openFAQ()),
    onClickMenuFeedback: () => dispatch(openFeedback()),
    onClickMenuConnect: () => dispatch(openGetMobile()),
    onClickMenuAccount: () => dispatch(openSyncPrefs("accountSettings")),
    onClickMenuSignIn: () => dispatch(openSyncPrefs("signinSync")),
    onClickMenuProfile: () => dispatch(openProfileMenu()),
  })
)(AppHeader);
