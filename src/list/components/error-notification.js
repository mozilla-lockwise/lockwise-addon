/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import styles from "./notification.css";
import { classNames } from "../../common";

export default function ErrorNotification({ className, children }) {
  const fullClassName = classNames([ styles.errorNotification, className ]);

  return <div className={fullClassName}>{children}</div>;
}

ErrorNotification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
