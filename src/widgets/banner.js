/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import PropTypes from "prop-types";
import React from "react";

import styles from "./banner.css";
import { classNames } from "../common";

// TODO: add "close banner" hooks (https://github.com/mozilla-lockbox/lockbox-addon/issues/95)

export default function Banner({ className, children }) {
  const fullClassName = classNames([ styles.banner, className ]);

  return <div className={fullClassName}>{children}</div>;
}

Banner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
