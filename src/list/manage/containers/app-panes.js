/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import { connect } from "react-redux";

export function AppPanes({
  children,
  selectedTab = "logins",
}) {
  return children[selectedTab];
}

AppPanes.propTypes = {
  children: PropTypes.object.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default connect(
  ({ app: { tabs: { selectedTab }} }) => ({ selectedTab }),
)(AppPanes);
