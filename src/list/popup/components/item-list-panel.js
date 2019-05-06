/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Panel, { PanelHeader, PanelBanner, PanelBody, PanelFooter,
                PanelFooterButton } from "../../../widgets/panel";
import ItemList from "../../components/item-list";
import ItemFilter from "../../containers/item-filter";
import SyncNotification from "../../containers/connected-sync-notification";
import NoMatchingPlaceholder from "../../containers/no-matching-placeholder";
import NoEntriesPlaceholder from "../containers/no-entries-placeholder";

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
        <ItemList {...props} panel={true} items={items} selected={selected}
                  onChange={(s) => this.handleChange(s)}/>
    );
  }
}

export default function ItemListPanel({inputRef, totalItemCount, noResultsBanner,
                                       isFiltering, ...props}) {
  const openManager = () => {
    browser.runtime.sendMessage({
      type: "open_view",
      name: "manage",
    });
    window.close();
  };

  const hasItems = props.items.length !== 0;
  const hasAnything = totalItemCount !== 0;
  let list, topBorder, banner;

  topBorder = "normal";
  if (!hasItems) {
    const bannerContent = <PanelBanner border="floating" className={styles.panelBanner}>no rESULTs</PanelBanner>;
    if (!hasAnything) {
      banner = <Localized id="get-started-banner">{bannerContent}</Localized>;
      list = <NoEntriesPlaceholder className={styles.empty} />;
    } else {
      banner = <Localized id="no-matching-banner">{bannerContent}</Localized>;
      list = <NoMatchingPlaceholder title={false} className={styles.empty}/>;
    }
  } else {
    list = <PopupItemList {...props}/>;

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
            <PanelBanner border="floating" className={styles.panelBanner}> {count} eNTRIEs fOUNd</PanelBanner>
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

      <SyncNotification isPanel={true}/>

      {banner}

      <PanelBody scroll={false} className={styles.panelBody}>
        {list}
      </PanelBody>

      <PanelFooter border="floating">
        <Localized id="manage-logins-button">
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
  totalItemCount: PropTypes.number.isRequired,
  noResultsBanner: PropTypes.bool,
  ...ItemList.propTypes,
};

ItemListPanel.defaultProps = {
  noResultsBanner: false,
};
