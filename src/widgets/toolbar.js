/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";

import styles from "./toolbar.css";

export default function Toolbar({className, children}) {
  return (
    <menu className={classNames([styles.toolbar, className])}>
      {children}
    </menu>
  );
}

Toolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Toolbar.defaultProps = {
  className: "",
};

export function ToolbarSpace({className}) {
  return (
    <span className={classNames([styles.toolbarSpace, className])}/>
  );
}

ToolbarSpace.propTypes = {
  className: PropTypes.string,
};

ToolbarSpace.defaultProps = {
  className: "",
};
