/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { connect } from "react-redux";

import HomeBreadcrumbs from "../components/home-breadcrumbs";
import { requestSelectItem } from "../../actions";

export default connect(
  (state) => {
    const item = state.cache.currentItem;
    return {
      itemId: state.list.selectedItemId,
      itemTitle: item ? item.title : undefined,
    };
  },
  (dispatch) => ({
    onClickHome: () => { dispatch(requestSelectItem(null)); },
  })
)(HomeBreadcrumbs);
