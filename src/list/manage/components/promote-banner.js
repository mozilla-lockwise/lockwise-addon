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

export function PromotionBanner({title, details, onClose, children}) {
  return (
    <Banner className={styles.promotion}>
      <p className={styles.content}>
        <strong className={styles.title}>{title}</strong>
        &ndash;
        <span className={styles.details}>{details}</span>
      </p>
      {children}
      <Button
          type="button" className={styles.close}
          theme="normal" size="micro"
          onClick={onClose}></Button>
    </Banner>
  );
}

PromotionBanner.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
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

export function LocalizedPromotionBanner({l10nId, onClose, children}) {
  return (
    <Localized id={l10nId} attrs={{title: true, details: true, actionLabel: true}}>
      <PromotionBanner title="tItLe" details="dEtAiLs" actionLabel="dO iT!" onClose={onClose}>
        {children}
      </PromotionBanner>
    </Localized>
  );
}

LocalizedPromotionBanner.propTypes = {
  l10nId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
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

export function PromoteDeviceBanner({onAppStoreClick, onAndroidStoreClick, onClose}) {
  // TODO: localize the app store / google play buttons
  return (
    <LocalizedPromotionBanner l10nId="banner-promote-device" onClose={onClose}>
      <Button
        type="button" className={classNames([styles.action, styles.android])}
        theme="primary" size="wide"
        onClick={onAndroidStoreClick}></Button>
      <Button
        type="button" className={classNames([styles.action, styles.ios])}
        theme="primary" size="wide"
        onClick={onAppStoreClick}></Button>
    </LocalizedPromotionBanner>
  );
}
PromoteDeviceBanner.propTypes = {
  onAppStoreClick: PropTypes.func.isRequired,
  onAndroidStoreClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export function PromoteFxABanner({onAction, onClose}) {
  return (
    <LocalizedPromotionBanner l10nId="banner-promote-fxa" onAction={onAction} onClose={onClose}>
      <Button
        type="button" className={styles.action}
        theme="primary" size="wide"
        onClick={() => onAction()}></Button>
    </LocalizedPromotionBanner>
  );
}
PromoteFxABanner.propTypes = {
  onAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
