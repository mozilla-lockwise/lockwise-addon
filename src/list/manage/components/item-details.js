/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Button from "../../../widgets/button";
import DeviceBanner from "./device-banner";
import Toolbar from "../../../widgets/toolbar";
import { ItemFields } from "../../components/item-fields";

import styles from "./item-details.css";

const LOCALE = navigator.language;
const dateOptions = {year: "numeric", month: "long", day: "numeric" };

// Note: ItemDetails doesn't directly interact with items from the Lockbox
// datastore. For that, please consult <../containers/current-item.js>.
export default function ItemDetails({fields, onCopy, onEdit, onDelete}) {
  const created = new Date(fields.timeCreated).toLocaleDateString(LOCALE, dateOptions);
  const modified = new Date(fields.timePasswordChanged).toLocaleDateString(LOCALE, dateOptions);
  const lastUsed = new Date(fields.timeLastUsed).toLocaleDateString(LOCALE, dateOptions);

  return (
    <div id="itemDetails" className={styles.itemDetails}>
      <header className="detail-title">
        <h1>{fields.title}</h1>
        <Toolbar className={styles.buttons}>
          <Localized id="item-details-edit">
            <Button id="editItemButton" className={styles.editButton}
                    type="button"
                    theme={"ghost"} onClick={() => onEdit()}>eDIt</Button>
          </Localized>
          <Localized id="item-details-delete">
            <Button id="deleteItemButton" className={styles.deleteButton}
                    type="button"
                    theme={"ghost"} onClick={() => onDelete()}>dELETe</Button>
          </Localized>
        </Toolbar>
      </header>

      <ItemFields fields={fields} onCopy={onCopy} />

      <div className={styles.metadata}>
        <hr/>
        <div className={styles.clear}></div>
        <Localized id="item-details-created" $date={created}>
          <p>Created: {created}</p>
        </Localized>
        <Localized id="item-details-modified" $date={modified}>
          <p>Last Modified: {modified}</p>
        </Localized>
        <Localized id="item-details-last-used" $date={lastUsed}>
          <p>Last Used: {lastUsed}</p>
        </Localized>
      </div>

      <div className={styles.promotion}>
        <DeviceBanner />
      </div>
    </div>
  );
}

ItemDetails.propTypes = {
  ...ItemFields.propTypes,
  onCopy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
