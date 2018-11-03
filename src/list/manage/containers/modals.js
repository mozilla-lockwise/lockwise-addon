/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { connect } from "react-redux";

import ModalRoot from "../../../widgets/modal-root";
import { LocalizedConfirmDialog } from "../../../widgets/dialog-box";
import { hideModal, removeItem, cancelEditing, selectItem } from
       "../../actions";

export const DeleteItemModal = connect(
  (state) => ({
    l10nId: "modal-delete",
    theme: "danger",
  }),
  (dispatch, {itemId}) => ({
    onConfirm: () => { dispatch(removeItem(itemId)); },
  })
)(LocalizedConfirmDialog);

export const CancelEditingModal = connect(
  (state) => ({
    l10nId: "modal-cancel-editing",
  }),
  (dispatch, {nextItemId}) => {
    if (nextItemId !== undefined) {
      return {onConfirm: () => { dispatch(selectItem(nextItemId)); }};
    }
    return {onConfirm: () => { dispatch(cancelEditing()); }};
  }
)(LocalizedConfirmDialog);

const MODALS = {
  "delete": DeleteItemModal,
  "cancel-editing": CancelEditingModal,
};

export default connect(
  (state) => ({
    modals: MODALS,
    modalId: state.modal.id,
    modalProps: state.modal.props,
  }),
  (dispatch) => ({
    onClose: () => { dispatch(hideModal()); },
  })
)(ModalRoot);
