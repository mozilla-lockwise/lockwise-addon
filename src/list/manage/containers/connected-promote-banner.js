/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { PromoteDeviceBanner, PromoteFxABanner } from "../components/promote-banner";
import { openHomepage, openSyncPrefs } from "../../actions";

export function CurrentPromotionBanner({hasProfile, onClickDeviceBanner, onClickFxABanner}) {
  if (hasProfile) {
    return <PromoteDeviceBanner onAction={onClickDeviceBanner} />;
  }
  return <PromoteFxABanner onAction={onClickFxABanner} />;
}

CurrentPromotionBanner.propTypes = {
  hasProfile: PropTypes.bool,
  onClickDeviceBanner: PropTypes.func.isRequired,
  onClickFxABanner: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    hasProfile: state.app.profileWrap.hasProfile,
  }),
  (dispatch) => ({
    onClickDeviceBanner: () => dispatch(openHomepage()),
    onClickFxABanner: () => dispatch(openSyncPrefs()),
  }),
)(CurrentPromotionBanner);
