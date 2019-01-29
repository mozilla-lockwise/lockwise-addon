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
    };
  }

  static get defaultProps() {
    return {
      className: "",
      monospace: false,
    };
  }

  focus(select = false) {
    this.inputElement.focus();
    if (select) {
      this.inputElement.setSelectionRange(0, this.inputElement.value.length);
    }
  }

  render() {
    const { className, monospace, ...props } = this.props;
    return (
      <input {...props} className={classNames([
        styles.input,
         monospace && styles.monospace, className,
      ])} ref={(element) => this.inputElement = element} />
    );
  }
}
