/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../common";
import { Link } from "./link";

import styles from "./breadcrumbs.css";

export default function Breadcrumbs({className, ...props}) {
  return (
    <div {...props} className={classNames([styles.breadcrumbs, className])}/>
  );
}

Breadcrumbs.propTypes = {
  className: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  className: "",
};

export function Crumb({className, onClick, ...props}) {
  const finalClassName = classNames([styles.crumb, className]);
  if (onClick) {
    return (
      <Link {...props} className={finalClassName} onClick={onClick}/>
    );
  }

  return (
    <span {...props} className={finalClassName}/>
  );
}

Crumb.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Crumb.defaultProps = {
  className: "",
};
