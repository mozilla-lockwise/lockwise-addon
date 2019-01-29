/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Panel, { PanelHeader, PanelBanner, PanelBody, PanelFooter,
                PanelFooterButton } from "../../../widgets/panel";
import ItemList, { ItemListPlaceholder } from "../../components/item-list";
import ItemFilter from "../../containers/item-filter";

import styles from "./item-list-panel.css";

class PopupItemList extends React.Component {
  static get propTypes() {
    return {
      ...ItemList.propTypes,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  handleChange(selected) {
    this.setState({selected});
  }

  render() {
    const {items, ...props} = this.props;
    const {selected} = this.state;

    return (
        <ItemList {...props} panel={true} items={items} verbose={false} selected={selected}
                onChange={(s) => this.handleChange(s)}/>
    );
  }
}

export default function ItemListPanel({inputRef, noResultsBanner,
                                       isFiltering, ...props}) {
  const openManager = () => {
    browser.runtime.sendMessage({
      type: "open_view",
      name: "manage",
    });
    window.close();
  };

  const hasItems = props.items.length !== 0;
  let list, topBorder, banner;

  if (!hasItems) {
    list = (
      <Localized id="all-items-no-results">
        <ItemListPlaceholder>
          wHEn yOu cREATe an eNTRy...
        </ItemListPlaceholder>
      </Localized>
    );
    topBorder = "none";
  } else {
    list = <PopupItemList {...props}/>;
    topBorder = "normal";

    if (noResultsBanner) {
      banner = (
        <Localized id="no-results-banner">
          <PanelBanner border="floating" className={styles.panelBanner}>no rESULTs</PanelBanner>
        </Localized>
      );
    } else if (isFiltering) {
      const count = props.items.length;
      banner = (
          <Localized id="filtered-banner" $count={count}>
            <PanelBanner border="floating"> {count} eNTRIEs fOUNd</PanelBanner>
          </Localized>
      );
    } else {
      banner = (
        <Localized id="default-banner">
          <PanelBanner border="floating" className={styles.panelBanner}>rECENTLy uSEd eNTRIEs</PanelBanner>
        </Localized>
      );
    }
  }

  return (
    <Panel>
      <PanelHeader border={topBorder} className={styles.panelHeader}>
        <ItemFilter inputRef={inputRef} className={styles.filterPanel} />
      </PanelHeader>

      {banner}

      <PanelBody scroll={false} className={styles.panelBody}>
        {list}
      </PanelBody>

      <PanelFooter border="floating">
        <Localized id="manage-lockbox-button">
          <PanelFooterButton onClick={openManager} className={styles.panelFooterButton}>
            oPEn lOCKBox
          </PanelFooterButton>
        </Localized>
      </PanelFooter>
    </Panel>
  );
}

ItemListPanel.propTypes = {
  inputRef: PropTypes.func,
  noResultsBanner: PropTypes.bool,
  ...ItemList.propTypes,
};

ItemListPanel.defaultProps = {
  noResultsBanner: false,
};
