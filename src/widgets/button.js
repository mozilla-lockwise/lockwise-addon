/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./button.css";

const THEME_CLASS_NAME = {
  primary: `${styles.primaryTheme}`,
  normal: `${styles.normalTheme}`,
  ghost: `${styles.ghostTheme}`,
  danger: `${styles.dangerTheme}`,
};

const SIZE_CLASS_NAME = {
  puffy: `${styles.puffySize}`,
  normal: `${styles.normalSize}`,
  micro: `${styles.microSize}`,
  wide: `${styles.normalSize} ${styles.wideSize}`,
};

export default class Button extends React.Component {
  static get propTypes() {
    return {
      theme: PropTypes.oneOf(Object.keys(THEME_CLASS_NAME)),
      size: PropTypes.oneOf(Object.keys(SIZE_CLASS_NAME)),
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      theme: "normal",
      size: "normal",
      className: "",
    };
  }

  focus() {
    this.buttonElement.focus();
  }

  render() {
    const {className, theme, size, ...props} = this.props;
    return (
      <button {...props} className={classNames([
                styles.button, THEME_CLASS_NAME[theme],
                SIZE_CLASS_NAME[size], className,
              ])} ref={(element) => this.buttonElement = element}/>
    );
  }
}
