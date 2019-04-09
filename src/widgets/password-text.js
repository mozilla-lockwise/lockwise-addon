/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./input.css";

const PASSWORD_DOT = "\u2022";

export default class PasswordText extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      value: PropTypes.string,
      onReveal: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      className: "",
      value: "",
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }

  showPassword(show) {
    const {onReveal} = this.props;
    this.setState({showPassword: show});
    onReveal(show);
  }

  render() {
    // We don't need onReveal here, but need to exclude it from ...props.
    // eslint-disable-next-line no-unused-vars
    const {className, value, onReveal, ...props} = this.props;
    const {showPassword} = this.state;

    return (
      <div {...props} className={classNames([
        styles.monospace,
        styles.passwordText,
        className,
      ])}>
        {showPassword ? (
          <span>
            {value}
            <Localized id="password-input-hide" attrs={{title: true}}>
              <button type="button" className={styles.hideBtn} title="hIDe"
                      onClick={() => this.showPassword(false)}/>
            </Localized>
          </span>
        ) : (
          <span>
            {PASSWORD_DOT.repeat(value.length)}
            <Localized id="password-input-show" attrs={{title: true}}>
              <button type="button" className={styles.showBtn} title="sHOw"
                      onClick={() => this.showPassword(true)}/>
            </Localized>
          </span>
        )}
      </div>
    );
  }

}
