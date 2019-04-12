/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { flattenItem, unflattenItem } from "../../common";
import {
  addItem, updateItem, requestRemoveItem, editCurrentItem, requestCancelEditing,
  editorChanged, copiedField, revealPassword, concealPassword, openFAQ,
} from "../../actions";
import EditItemDetails from "../components/edit-item-details";
import ItemDetails from "../components/item-details";
import Homepage from "../components/homepage";
import IntroPage from "../components/intro-page";

const ConnectedEditItemDetails = connect(
  (state, ownProps) => ({
    itemId: ownProps.item ? ownProps.item.id : undefined,
    fields: ownProps.item ? flattenItem(ownProps.item) : undefined,
  }),
  (dispatch, ownProps) => {
    let onSave;
    if (ownProps.item) {
      onSave = (fields) => {
        dispatch(updateItem(unflattenItem(fields, ownProps.item.id)));
      };
    } else {
      onSave = (fields) => {
        dispatch(addItem(unflattenItem(fields)));
      };
    }

    return {
      onChange: () => { dispatch(editorChanged()); },
      onSave,
      onCancel: () => { dispatch(requestCancelEditing()); },
      onDelete: () => { dispatch(requestRemoveItem(ownProps.item.id)); },
      onReveal: (show) => {
        dispatch(show ? revealPassword(ownProps.item && ownProps.item.id)
          : concealPassword(ownProps.item && ownProps.item.id));
      },
    };
  },
)(EditItemDetails);

const ConnectedItemDetails = connect(
  (state, ownProps) => ({
    fields: flattenItem(ownProps.item),
  }),
  (dispatch, ownProps) => ({
    onCopy: (field, toCopy) => { dispatch(copiedField(field, toCopy, ownProps.item)); },
    onEdit: () => { dispatch(editCurrentItem()); },
    onDelete: () => { dispatch(requestRemoveItem(ownProps.item.id)); },
    onReveal: (show) => {
      dispatch(show ? revealPassword(ownProps.item && ownProps.item.id)
        : concealPassword(ownProps.item && ownProps.item.id));
    },
  })
)(ItemDetails);

function CurrentSelection({editing, item, hideHome, numItems, error, onLearnMoreInIntro}) {
  let inner;
  if (editing) {
    inner = <ConnectedEditItemDetails item={item} error={error}/>;
  } else if (item) {
    inner = <ConnectedItemDetails item={item}/>;
  } else if (hideHome) {
    // Don't show anything since we're still loading the item details.
    inner = null;
  } else if (numItems !== 0) {
    inner = <Homepage/>;
  } else {
    inner = <IntroPage onLearnMore={() => onLearnMoreInIntro()}/>;
  }
  return inner;
}

CurrentSelection.propTypes = {
  editing: PropTypes.bool.isRequired,
  item: PropTypes.object,
  error: PropTypes.object,
  hideHome: PropTypes.bool.isRequired,
  numItems: PropTypes.number.isRequired,
  onLearnMoreInIntro: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    editing: state.editor.editing,
    item: state.cache.currentItem,
    error: state.editor.error,
    hideHome: state.editor.hideHome,
    numItems: state.cache.items.length,
  }),
  (dispatch) => ({
    onLearnMoreInIntro: () => dispatch(openFAQ("how-do-i-get-my-saved-logins-into-firefox-lockbox")),
  })
)(CurrentSelection);
