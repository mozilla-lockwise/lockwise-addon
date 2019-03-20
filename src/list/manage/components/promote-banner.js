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

import styles from "./promote-banner.css";
import { openWebsite, openSyncPrefs } from "../../common";

const URL = "https://lockbox.firefox.com";

export function PromotionBanner({title, details, actionLabel, onAction}) {
  return (
    <Banner className={styles.promotion}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.details}>{details}</span>
      </div>
      <Button
        type="button" className={styles.action}
        theme="primary" size="wide"
        onClick={() => onAction()}>{actionLabel}</Button>
    </Banner>
  );
}

PromotionBanner.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export function LocalizedPromotionBanner({l10nId, onAction}) {
  return (
    <Localized id={l10nId} attrs={{title: true, details: true, actionLabel: true}}>
      <PromotionBanner title="tItLe" details="dEtAiLs" actionLabel="dO iT!" onAction={onAction} />
    </Localized>
  );
}

LocalizedPromotionBanner.propTypes = {
  l10nId: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export function PromoteDeviceBanner() {
  return (<LocalizedPromotionBanner l10nId="banner-promote-device" onAction={() => openWebsite(URL)} />);
}
export function PromoteFxABanner() {
  return (<LocalizedPromotionBanner l10nId="banner-promote-fxa" onAction={() => openSyncPrefs()} />);
}
