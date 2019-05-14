/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import Banner from "../../../widgets/banner";
import Button from "../../../widgets/button";
import { classNames } from "../../../common";

import styles from "./promote-banner.css";

export function LocalizedPromotionBanner({l10nId, children}) {
  return (
    <Banner className={styles.promotion}>
      <Localized id={l10nId}
                 bold={ <strong /> }>
        <p className={styles.content}>tAkE yOUr pAsSwOrDs eVeRyWhErE - dOwNlOaD oUr aPp</p>
      </Localized>
      {children}
    </Banner>
  );
}
LocalizedPromotionBanner.propTypes = {
  l10nId: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Button]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Button]),
      }),
    ),
  ]).isRequired,
};

export function PromoteDeviceBanner({openAppStore, openPlayStore}) {
  return (
    <LocalizedPromotionBanner l10nId="banner-promote-device">
      <Localized id="banner-promote-device-play-store" attrs={{title: true}}>
        <Button
          title="gET iT oN gOOGLe pLAy"
          type="button" className={classNames([styles.action, styles.android])}
          theme="primary" size="wide"
          onClick={openPlayStore}></Button>
      </Localized>
      <Localized id="banner-promote-device-app-store" attrs={{title: true}}>
        <Button
          title="dOWNLOAd oN tHe aPP sTORe"
          type="button" className={classNames([styles.action, styles.ios])}
          theme="primary" size="wide"
          onClick={openAppStore}></Button>
      </Localized>
    </LocalizedPromotionBanner>
  );
}
PromoteDeviceBanner.propTypes = {
  openAppStore: PropTypes.func.isRequired,
  openPlayStore: PropTypes.func.isRequired,
};

export function PromoteFxABanner({onAction}) {
  return (
    <LocalizedPromotionBanner l10nId="banner-promote-fxa">
      <Localized id="banner-promote-fxa-action-label">
        <Button
          type="button" className={styles.action}
          theme="primary" size="wide"
          onClick={() => onAction()}>sIGn iN</Button>
      </Localized>
    </LocalizedPromotionBanner>
  );
}
PromoteFxABanner.propTypes = {
  onAction: PropTypes.func.isRequired,
};
