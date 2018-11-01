/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./text-area.css";

export default class TextArea extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: "",
    };
  }

  focus(select = false) {
    this.textAreaElement.focus();
    if (select) {
      this.textAreaElement.setSelectionRange(
        0, this.textAreaElement.value.length
      );
    }
  }

  render() {
    const {className, ...props} = this.props;
    return (
      <textarea {...props}
                className={classNames([styles.textArea, className])}
                ref={(element) => this.textAreaElement = element}/>
    );
  }
}
