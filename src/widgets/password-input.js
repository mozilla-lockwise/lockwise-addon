/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";
import Stack from "./stack";

import styles from "./input.css";

export default class PasswordInput extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      monospace: PropTypes.bool,
      disabled: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      className: "",
      monospace: true,
      disabled: false,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }

  showPassword(show) {
    this.setState({showPassword: show});
  }

  focus() {
    this.inputElement.focus();
  }

  render() {
    const {className, monospace, disabled, ...props} = this.props;
    const {showPassword} = this.state;
    const selectedIndex = showPassword ? 1 : 0;

    return (
      <div className={classNames([
             styles.password, styles.inputWrapper, disabled && styles.disabled,
             className,
           ])}>
        <input {...props} type={showPassword ? "text" : "password"}
               className={monospace ? styles.monospace : ""} disabled={disabled}
               ref={(element) => this.inputElement = element}/>
        <Stack stretch selectedIndex={selectedIndex}>
          <Localized id="password-input-show" attrs={{title: true}}>
            <button type="button" className={styles.showBtn} title="sHOw"
                    disabled={disabled}
                    onClick={() => this.showPassword(true)}/>
          </Localized>
          <Localized id="password-input-hide" attrs={{title: true}}>
            <button type="button" className={styles.hideBtn} title="hIDe"
                    disabled={disabled}
                    onClick={() => this.showPassword(false)}/>
          </Localized>
        </Stack>
      </div>
    );
  }
}
