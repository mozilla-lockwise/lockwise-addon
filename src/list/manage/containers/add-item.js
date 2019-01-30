/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Button from "../../../widgets/button";
import { startNewItem } from "../../actions";

import styles from "./add-item.css";

function AddItem({disabled, onAddItem}) {
  return (
    <Localized id="add-item-button">
      <Button theme="primary" id="addItemButton" className={styles.addItem} disabled={disabled}
              onClick={onAddItem}>
        aDd iTEm
      </Button>
    </Localized>
  );
}

AddItem.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    disabled: state.editor.editing,
  }),
  (dispatch) => ({
    onAddItem: () => { dispatch(startNewItem()); },
  })
)(AddItem);
