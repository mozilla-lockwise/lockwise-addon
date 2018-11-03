/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { flattenItem } from "../../common";
import { selectItem, copiedField } from "../../actions";
import AllItemsPanel from "./all-items-panel";
import ItemDetailsPanel from "../components/item-details-panel";

const ConnectedItemDetailsPanel = connect(
  (state, ownProps) => ({
    fields: flattenItem(ownProps.item),
  }),
  (dispatch) => ({
    onCopy: (field) => { dispatch(copiedField(field)); },
    onBack: () => { dispatch(selectItem(null)); },
  })
)(ItemDetailsPanel);

function CurrentSelection({item, inputRef}) {
  if (item) {
    return <ConnectedItemDetailsPanel item={item}/>;
  }
  return <AllItemsPanel inputRef={inputRef}/>;
}

CurrentSelection.propTypes = {
  item: PropTypes.object,
  inputRef: PropTypes.func,
};

export default connect(
  (state) => ({
    item: state.cache.currentItem,
  })
)(CurrentSelection);
