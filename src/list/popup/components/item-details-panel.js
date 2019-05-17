/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";
import PropTypes from "prop-types";

import Panel, { PanelHeader, PanelBody, PanelFooter,
                PanelFooterButton } from "../../../widgets/panel";
import { ItemFields } from "../../components/item-fields";

import styles from "./item-details-panel.css";

export default function ItemDetailsPanel({fields, showPassword, onCopy, onBack, onReveal, onOpenWebsite}) {
  return (
    <Panel>
      <Localized id="item-details-panel-title">
        <PanelHeader onBack={onBack} className={styles.panelHeader} isDetail={true}>
          lOGIn dETAILs
        </PanelHeader>
      </Localized>

      <PanelBody className={styles.panelBody}>
        <ItemFields fields={fields}
                    showPassword={showPassword}
                    onCopy={onCopy}
                    onReveal={onReveal}
                    onOpenWebsite={onOpenWebsite}
                    isPopup={true}/>
      </PanelBody>

      <PanelFooter border="floating">
        <Localized id="list-detail-button">
          <PanelFooterButton onClick={onOpenWebsite} className={styles.panelFooterButton}>
            oPEn wEBSITe
          </PanelFooterButton>
        </Localized>
      </PanelFooter>
    </Panel>
  );
}

ItemDetailsPanel.propTypes = {
  ...ItemFields.propTypes,
  onCopy: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onReveal: PropTypes.func.isRequired,
  onOpenWebsite: PropTypes.func.isRequired,
};
