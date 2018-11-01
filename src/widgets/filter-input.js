/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./input.css";

export default class FilterInput extends React.Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      onChange: PropTypes.func,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      className: "",
      value: "",
      disabled: false,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  updateValue(value) {
    if (value !== this.state.value) {
      this.setState({value});
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
  }

  focus(select = false) {
    this.inputElement.focus();
    if (select) {
      this.inputElement.setSelectionRange(0, this.inputElement.value.length);
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {className, onChange, value, disabled, ...props} = this.props;

    return (
      <div className={classNames([
             styles.filter, styles.inputWrapper, disabled && styles.disabled,
             className,
           ])}>
        <input {...props} type="search" disabled={disabled}
               value={this.state.value}
               onChange={(e) => this.updateValue(e.target.value)}
               ref={(element) => this.inputElement = element}/>
        <Localized id="filter-input-clear" attrs={{title: true}}>
          <button type="button" title="cLEAr"
                  disabled={disabled || !this.state.value}
                  onClick={() => this.updateValue("")}/>
        </Localized>
      </div>
    );
  }
}
