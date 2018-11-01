/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./stack.css";

export default class Stack extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.node,
      selectedIndex: PropTypes.number,
      stretch: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      selectedIndex: 0,
      stretch: false,
    };
  }

  render() {
    const {children, selectedIndex, stretch, ...props} = this.props;
    return (
      <section {...props}>
        <div className={classNames([styles.stack, stretch && styles.stretch])}>
          {React.Children.map(children, (child, i) => {
            const extraProps = {};
            if (i === selectedIndex) {
              extraProps["data-selected"] = true;
            }

            return (
              <span {...extraProps} className={styles.stackItem} key={i}>
                {child}
              </span>
            );
          })}
        </div>
      </section>
    );
  }
}
