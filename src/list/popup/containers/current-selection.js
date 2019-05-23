/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { flattenItem } from "../../common";
import { selectItem, copiedField, openWebsite } from "../../actions";
import AllItemsPanel from "./all-items-panel";
import ItemDetailsPanel from "../components/item-details-panel";
import { concealPassword, revealPassword } from "../../actions";

const ConnectedItemDetailsPanel = connect(
  (state, ownProps) => ({
    fields: flattenItem(ownProps.item),
    showPassword: state.list.showPassword,
  }),
  (dispatch, ownProps) => ({
    onCopy: (field, toCopy) => { dispatch(copiedField(field, toCopy, ownProps.item)); },
    onBack: () => { dispatch(selectItem(null)); },
    onReveal: (show) => {
      const id = ownProps.item && ownProps.item.id;
      return dispatch(show ? revealPassword(id) : concealPassword(id));
    },
    onOpenWebsite: () => { dispatch(openWebsite(ownProps.item, true)); },
  })
)(ItemDetailsPanel);

function CurrentSelection({item, inputRef, onReveal}) {
  if (item) {
    return <ConnectedItemDetailsPanel onReveal={onReveal} item={item}/>;
  }
  return <AllItemsPanel inputRef={inputRef}/>;
}

CurrentSelection.propTypes = {
  item: PropTypes.object,
  inputRef: PropTypes.func,
  onReveal: PropTypes.func,
};

export default connect(
  (state) => ({
    item: state.cache.currentItem,
  }),
)(CurrentSelection);
