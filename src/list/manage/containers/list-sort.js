/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { connect } from "react-redux";

import ListSort from "../components/list-sort";
import { getAction } from "../../sort";

export default connect(
  (state) => ({
    sort: state.cache.sort,
    disabled: !state.cache.items.length,
  }),
  (dispatch) => ({
    onChange: (newSort) => {
      dispatch({ type: getAction(newSort) });
    },
  })
)(ListSort);
