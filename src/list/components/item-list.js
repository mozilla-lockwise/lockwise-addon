/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import PropTypes from "prop-types";
import React from "react";

import { classNames } from "../../common";
import ItemSummary from "./item-summary";
import ScrollingList from "../../widgets/scrolling-list";

import styles from "./item-list.css";

export default function ItemList({items, itemClassName, panel, ...props}) {
  return (
    <ScrollingList {...props} className={"itemList " + styles.itemList}
                   itemClassName={classNames([
                     styles.item, itemClassName,
                   ])} data={items} styledItems={false}>
      {({id, title, username}) => {
        return (
          <ItemSummary className={styles.itemSummary} id={id} title={title}
          username={username} panel={panel}/>
        );
      }}
    </ScrollingList>
  );
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  itemClassName: PropTypes.string,
  panel: PropTypes.bool,
  sort: PropTypes.string,
};

ItemList.defaultProps = {
  itemClassName: "",
  sort: "name",
};

export function ItemListPlaceholder({className, children}) {
  const fullClassName = classNames(["itemListEmpty", styles.empty, className]);
  return (
    <div className={fullClassName}>
      {children}
    </div>
  );
}

ItemListPlaceholder.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};

ItemListPlaceholder.defaultProps = {
  title: "",
  className: "",
};
