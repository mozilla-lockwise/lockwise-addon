/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import copy from "copy-to-clipboard";

import { classNames } from "../common";
import Button from "./button";
import Stack from "./stack";

import styles from "./copy-to-clipboard-button.css";

export default class CopyToClipboardButton extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.node,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
      ]).isRequired,
      title: PropTypes.string,
      timeout: PropTypes.number,
      onCopy: PropTypes.func,
      className: PropTypes.string,
      buttonClassName: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      timeout: 2000,
      buttonClassName: "",
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }

  async handleCopy() {
    const {value, timeout, onCopy} = this.props;

    const toCopy = value instanceof Function ? await value() : value;
    copy(toCopy);

    this.setState({copied: true});
    setTimeout(() => this.setState({copied: false}), timeout);
    if (onCopy) {
      onCopy();
    }
  }

  render() {
    let {title, children, className, buttonClassName} = this.props;
    const selectedIndex = this.state.copied ? 1 : 0;

    if (!children) {
      children = (
        <Localized id="copy-to-clipboard-button">
          <span>cOPy</span>
        </Localized>
      );
    }
    return (
      <Stack stretch selectedIndex={selectedIndex} className={className}>
        <Button theme="ghost" className={classNames([
                  styles.copyButton, buttonClassName,
                ])} title={title} onClick={() => this.handleCopy()}>
          {children}
        </Button>
        <Localized id="copy-to-clipboard-copied">
          <span className={styles.copiedLabel}>
            cOPIEd
          </span>
        </Localized>
      </Stack>
    );
  }
}
