/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import Modal from "react-modal";

import styles from "./modal-root.css";

export default function ModalRoot({modals, modalId, modalProps, onClose}) {
  let modal = null;
  if (modalId) {
    const CurrentModal = modals[modalId];
    modal = <CurrentModal {...modalProps} onClose={onClose}/>;
  }

  return (
    <Localized id="modal-root" attrs={{contentLabel: true}}>
      <Modal isOpen={Boolean(modalId)} className={styles.modal}
             overlayClassName={styles.overlay}>
        {modal}
      </Modal>
    </Localized>
  );
}

ModalRoot.propTypes = {
  modals: PropTypes.objectOf(PropTypes.func).isRequired,
  modalId: PropTypes.string,
  modalProps: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};
