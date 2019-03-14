/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

export default function ListCounter({count, className}) {
  return (
    <Localized id="list-count" $count={count}>
      <div id="listCounter" className={className} >{count} eNTRIEs</div>
    </Localized>
  );
}

ListCounter.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string,
};

ListCounter.defaultProps = {
  count: 0,
  className: "",
};
