/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./input.css";

export default class Input extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      monospace: PropTypes.bool,
      panel: PropTypes.bool
    };
  }

  static get defaultProps() {
    return {
      className: "",
      monospace: false,
      panel: false
    };
  }

  focus(select = false) {
    this.inputElement.focus();
    if (select) {
      this.inputElement.setSelectionRange(0, this.inputElement.value.length);
    }
  }

  render() {
    const { className, monospace, panel, ...props } = this.props;
    return (
      <input {...props} className={classNames([
        (panel ? styles.inputPanel : styles.input),
         monospace && styles.monospace, className,
      ])} ref={(element) => this.inputElement = element} />
    );
  }
}
