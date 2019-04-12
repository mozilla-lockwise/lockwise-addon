/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import ErrorNotification from "./error-notification";

import styles from "./notification.css";

export default class DuplicateNotification extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      title: "",
    };
  }

  render() {
    const { title } = this.props;

    return (
      <ErrorNotification className={styles.warningNotification}>
        <Localized id={`error-notification-duplicate`} $title={title} p={<p></p>}>
          <p className={styles.warningMessageLight}>
            aN eNTRy fOr {title} wITh tHAt uSERNAMe aLREADy eXISTs.
          </p>
        </Localized>
      </ErrorNotification>
    );
  }
}
