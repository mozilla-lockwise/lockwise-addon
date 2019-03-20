/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { openSyncPrefs } from "../common";

import styles from "./error-notification.css";

export class ErrorNotification extends React.Component {
  static get propTypes() {
    return {
      // profile not set as required, since the default is null
      // which tells us that the user has never signed in.
      hasProfileNeedsAttn: PropTypes.bool.isRequired,
      isPanel: PropTypes.bool,
      reconnectToSync: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      hasProfileNeedsAttn: false,
      isPanel: false,
      reconnectToSync: () => {},
    };
  }

  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.state = {hideNotification: false};
  }

  remove() {
    this.setState({
      hideNotification: true,
    });
  }

  render() {
    const { hideNotification } = this.state;
    const { isPanel, reconnectToSync, hasProfileNeedsAttn } = this.props;
    const shouldShow = hasProfileNeedsAttn && !hideNotification;

    return (<>
      {shouldShow && <div className={styles.errorNotification}>
        <Localized id={`error-notification-sync`}>
          <p className={styles.warningMessage}>Unable to sync logins.</p>
        </Localized>
        {!isPanel && <span onClick={this.remove} className={styles.closeIcon}></span>}
        <Localized id={`error-notification-sync-button`}>
          <button onClick={reconnectToSync}>Reconnect to Sync</button>
        </Localized>
       </div>}
    </>);
  }
}

export default connect(({
  app: {
    profileReducer: {
      hasProfileNeedsAttn,
    },
  },
}) => ({
  hasProfileNeedsAttn,
}),
  dispatch => ({
    reconnectToSync: () => openSyncPrefs(),
  })
)(ErrorNotification);
