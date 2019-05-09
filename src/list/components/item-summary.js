/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../../common";
import { NEW_ITEM_ID } from "../common";

import styles from "./item-summary.css";

export default function ItemSummary({className, id, title, username, panel}) {
  const trimmedTitle = title.trim();
  const trimmedUsername = username.trim();

  const isNew = id === NEW_ITEM_ID;
  const idModifier = (subject) => {
    if (isNew) {
      return "new-";
    }
    if (!subject.length) {
      return "no-";
    }
    return "";
  };

  const titleId = `item-summary-${idModifier(trimmedTitle)}title`;
  const usernameId = `item-summary-${idModifier(trimmedUsername)}username`;
  return (
    <div className={styles.itemSummaryContainer} data-item-id={id}>
      <div className={classNames([styles.itemSummary, className])}>
        <Localized id={titleId}>
          <div data-name="title" className={styles.title}>{title || "nO tITLe"}</div>
        </Localized>
        <Localized id={usernameId}>
          <div data-name="subtitle" className={styles.subtitle}>{username || "nO uSERNAMe"}</div>
        </Localized>
        {!isNew && panel &&
           <span className={classNames([styles.info, styles.panel])}></span>
        }
      </div>
    </div>
  );
}

ItemSummary.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  panel: PropTypes.bool,
};

ItemSummary.defaultProps = {
  className: "",
  id: null,
  title: "",
  username: "",
  showInfo: false,
};
