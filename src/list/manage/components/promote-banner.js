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

export function PromotionBanner({title, details, actionLabel, onAction, onClose}) {
  return (
    <Banner className={styles.promotion}>
      <p className={styles.content}>
        <strong className={styles.title}>{title}</strong>
        &mdash;
        <span className={styles.details}>{details}</span>
        <Button
          type="button" className={styles.action}
          theme="primary" size="wide"
          onClick={() => onAction()}>{actionLabel}</Button>
      </p>
      <Button
          type="button" className={styles.close}
          theme="normal" size="micro"
          onClick={onClose}>x</Button>
    </Banner>
  );
}

PromotionBanner.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  actionLabel: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export function LocalizedPromotionBanner({l10nId, onAction, onClose}) {
  return (
    <Localized id={l10nId} attrs={{title: true, details: true, actionLabel: true}}>
      <PromotionBanner title="tItLe" details="dEtAiLs" actionLabel="dO iT!" onAction={onAction} onClose={onClose} />
    </Localized>
  );
}

LocalizedPromotionBanner.propTypes = {
  l10nId: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export function PromoteDeviceBanner({onAction, onClose}) {
  return (<LocalizedPromotionBanner l10nId="banner-promote-device" onAction={onAction} onClose={onClose} />);
}
PromoteDeviceBanner.propTypes = {
  onAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
export function PromoteFxABanner({onAction, onClose}) {
  return (<LocalizedPromotionBanner l10nId="banner-promote-fxa" onAction={onAction} onClose={onClose} />);
}
PromoteFxABanner.propTypes = {
  onAction: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
