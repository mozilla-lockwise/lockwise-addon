/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./link.css";

export class Link extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.node,
      className: PropTypes.string,
      role: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      className: "",
      role: "link",
    };
  }

  get baseClassName() {
    return styles.link;
  }

  focus() {
    this.linkElement.focus();
  }

  render() {
    const {className, role, onClick, children, ...props} = this.props;
    return (
      <button {...props} role={role}
              className={classNames([this.baseClassName, className])}
              onClick={onClick} ref={(element) => this.linkElement = element}>
        {children}
      </button>
    );
  }
}

// XXX: External links go to a real URL, and we should probably indicate that to
// the user (by Firefox showing the URL in the bottom of the window), even if
// the actual loading of the URL happens in a Redux action.

export class ExternalLink extends Link {
  get baseClassName() {
    return classNames([styles.link, styles.external]);
  }
}
