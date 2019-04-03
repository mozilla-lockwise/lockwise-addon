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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      launchExistingEntry: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: "",
      title: "",
      launchExistingEntry: () => {},
    };
  }

  render() {
    const { title, id, launchExistingEntry } = this.props;
    const launchEntry = () => launchExistingEntry(id);
    // const link = (
    //     <Localized id={`error-notification-duplicate-link`} attrs={{title}}
    //                a={<a href="#" onClick={() => launchExistingEntry(id)}/>}>
    //     <a>gO TO eXISTINg eNTRy?</a>
    //     </Localized>
    // );

    return (
      <ErrorNotification className={styles.warningNotification}>
        <Localized id={`error-notification-duplicate`} attrs={{title}}>
          <p className={styles.warningMessageLight}>
          aN eNTRy fOr { title } wITh tHAt uSERNAMe aLREADy eXISTs.</p>
        </Localized>
        <button type="button" onClick={launchEntry}>gO TO eXISTINg eNTRy?</button>
      </ErrorNotification>
    );
  }
}
