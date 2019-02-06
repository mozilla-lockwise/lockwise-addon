/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { PanelHeader, PanelBody, PanelFooter } from "../../../widgets/panel";
import AddItem from "../containers/add-item";
import ItemList, { ItemListPlaceholder } from "../../components/item-list";
import ItemFilter from "../../containers/item-filter";
import SendFeedback from "../containers/send-feedback";

import styles from "./item-list-panel.css";

export default function ItemListPanel({className, inputRef, totalItemCount,
                                       ...props}) {
  const hasItems = props.items.length !== 0;
  let list;
  if (!hasItems) {
    list = (
      <Localized id={`all-items-${totalItemCount ? "no-results" :
                                                   "get-started"}`}>
        <ItemListPlaceholder>
          wHEn yOu cREATe an eNTRy...
        </ItemListPlaceholder>
      </Localized>
    );
  } else {
    list = <ItemList {...props}/>;
  }

  return (
    <aside className={className}>
      <PanelHeader className={styles.panelHeader}
                   border={hasItems ? "floating" : "none"}
                   toolbarClassName={styles.filterToolbar}>
        <ItemFilter className={styles.itemFilter}
                    inputRef={inputRef}/>
        <AddItem/>
      </PanelHeader>

      <PanelBody scroll={false}>
        {list}
      </PanelBody>

      <PanelFooter border="floating">
        <SendFeedback/>
      </PanelFooter>
    </aside>
  );
}

ItemListPanel.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.func,
  totalItemCount: PropTypes.number.isRequired,
  ...ItemList.propTypes,
};

ItemListPanel.defaultProps = {
  className: "",
};
