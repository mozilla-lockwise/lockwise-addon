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
      profile: PropTypes.object,
      hasProfile: PropTypes.bool.isRequired,
      isPanel: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      profile: {},
      hasProfile: false,
      isPanel: false,
    };
  }

  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
    this.state = {hideNotification: false};
  }

  remove() {
    this.setState({
      hideNotification: true
    });
  }

  render() {
    const { hideNotification } = this.state;
    const { isPanel, reconnectToSync } = this.props;
    return (<>
      {!hideNotification && <div className={styles.errorNotification}>
        <Localized id={`error-notification-sync`}>
          <p className={styles.warningMessage}>Unable to sync logins.</p>
        </Localized>
        {isPanel && <span onClick={this.remove} className={styles.closeIcon}></span>}
        <Localized id={`error-notification-sync-button`}>
          <button onClick={reconnectToSync}>Reconnect to Sync</button>
        </Localized>
       </div>}
    </>);
  }
}

export default connect(
  ({
    app: {
      profile,
      hasProfile,
    },
  }) => ({
    profile,
    hasProfile,
  }),
  dispatch => ({
    reconnectToSync: () => openSyncPrefs(),
  })
)(ErrorNotification);
