/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { PromoteDeviceBanner, PromoteFxABanner } from "../components/promote-banner";
import { openHomepage, openSyncPrefs, hidePromo } from "../../actions";

export function CurrentPromotionBanner({hasProfile, showPromo, onClickDeviceBanner, onClickFxABanner, onClose}) {
  if (!showPromo) { return null; }
  if (hasProfile) {
    return <PromoteDeviceBanner onAction={onClickDeviceBanner} onClose={onClose} />;
  }
  return <PromoteFxABanner onAction={onClickFxABanner} onClose={onClose} />;
}

CurrentPromotionBanner.propTypes = {
  hasProfile: PropTypes.bool,
  showPromo: PropTypes.bool,
  onClickDeviceBanner: PropTypes.func.isRequired,
  onClickFxABanner: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    hasProfile: state.app.profileWrap.hasProfile,
    showPromo: state.promo.showPromo,
  }),
  (dispatch) => ({
    onClickDeviceBanner: () => dispatch(openHomepage()),
    onClickFxABanner: () => dispatch(openSyncPrefs()),
    onClose: () => dispatch(hidePromo()),
  }),
)(CurrentPromotionBanner);
