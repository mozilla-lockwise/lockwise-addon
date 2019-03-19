/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import PropTypes from "prop-types";
import React from "react";

import styles from "./banner.css";

// TODO: add "close banner" hooks (https://github.com/mozilla-lockbox/lockbox-addon/issues/95)

export default function Banner({ children }) {
  return <div className={styles.banner}>{children}</div>;
}

Banner.propTypes = {
  children: PropTypes.node,
};
