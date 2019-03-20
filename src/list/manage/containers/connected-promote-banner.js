/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { PromoteDeviceBanner, PromoteFxABanner } from "../components/promote-banner";

export function CurrentPromotionBanner({hasProfile}) {
  if (hasProfile) {
    return <PromoteDeviceBanner />;
  }
  return <PromoteFxABanner />;
}

CurrentPromotionBanner.propTypes = {
  hasProfile: PropTypes.bool,
};

export default connect(
  (state) => ({
    hasProfile: state.app.hasProfile,
  })
)(CurrentPromotionBanner);
