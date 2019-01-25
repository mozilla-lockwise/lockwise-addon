/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Button from "../../../widgets/button";
import Toolbar from "../../../widgets/toolbar";
import { ItemFields } from "../../components/item-fields";

import styles from "./item-details.css";

// Note: ItemDetails doesn't directly interact with items from the Lockbox
// datastore. For that, please consult <../containers/current-item.js>.

export default function ItemDetails({fields, onCopy, onEdit, onDelete}) {
  return (
    <div id="itemDetails" className={styles.itemDetails}>
      <Localized id={"item-details-heading-view"}>
        <h1>iTEm dETAILs</h1>
      </Localized>
      <ItemFields fields={fields} onCopy={onCopy}/>
      <Toolbar className={styles.buttons}>
        <Localized id="item-details-edit">
          <Button onClick={() => onEdit()}>eDIt</Button>
        </Localized>
        <Localized id="item-details-delete">
          <Button onClick={() => onDelete()}>dELETe</Button>
        </Localized>
      </Toolbar>
    </div>
  );
}

ItemDetails.propTypes = {
  ...ItemFields.propTypes,
  onCopy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
