/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { connect } from "react-redux";

import ItemListPanel from "../components/item-list-panel";
import { requestSelectItem } from "../../actions";
import { parseFilterString, filterItem } from "../../filter";
import { NEW_ITEM_ID } from "../../common";

const collator = new Intl.Collator();

export default connect(
  (state, ownProps) => {
    const totalItemCount = state.cache.items.length;
    const filter = parseFilterString(state.list.filter.query);
    const selected = state.list.selectedItemId;
    const items = state.cache.items
                       .filter((i) => filterItem(filter, i))
                       .sort((a, b) => collator.compare(a.title, b.title));

    if (selected === NEW_ITEM_ID) {
      items.unshift({id: NEW_ITEM_ID, title: "", username: ""});
    }
    return {...ownProps, totalItemCount, items, selected};
  },
  (dispatch) => ({
    onChange: (id) => dispatch(requestSelectItem(id)),
  }),
)(ItemListPanel);
