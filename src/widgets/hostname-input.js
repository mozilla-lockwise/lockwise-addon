/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


 import { isReactLocalization } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./input.css";

export default class HostnameInput extends React.Component {
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

  static get contextTypes() {
    return {
      l10n: isReactLocalization,
    };
  }

  constructor(props, context) {
    super(props, context);
    this.state = context;
  }

  focus(select = false) {
    this.inputElement.blur();
    this.inputElement.focus();
    if (select) {
      this.inputElement.setSelectionRange(0, this.inputElement.value.length);
    }
  }

  render() {
    const { className, monospace, ...props } = this.props;
    const onInvalidHostname = (e) => {
      const { l10n } = this.context;
      const validity = this.inputElement.validity;
      if (validity.valueMissing || validity.typeMismatch) {
        this.inputElement.setCustomValidity(l10n.getString("hostname-error-message"));
      }
    };
    const onInputHostname = (e) => {
      console.log(`input value is "${this.inputElement.value}`);
      this.inputElement.setCustomValidity("");
    };

    return (
      <input {...props}
        type="url"
        onInvalid={onInvalidHostname}
        onInput={onInputHostname}
        className={classNames([
          styles.input,
          monospace && styles.monospace, className,
        ])}
        ref={(element) => this.inputElement = element} />
    );
  }
}
