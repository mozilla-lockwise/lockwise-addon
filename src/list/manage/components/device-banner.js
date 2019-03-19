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

import styles from "./device-banner.css";
import { openWebsite } from "../../common";

const URL = "https://lockbox.firefox.com";

export default function DeviceBanner() {
  return (
    <Banner>
      <div className={styles.promoteDevice}>
        <div className={styles.content}>
          <Localized id="product-fulltitle">
            <h1>fIrEfOx lOcKbOx</h1>
          </Localized>
          <Localized id="banner-promote-device">
            <span>Maecenas sed diam eget risus varius blandit sit amet non magna.</span>
          </Localized>
        </div>
        <Button
            type="button" className={styles.learnMore}
            theme="primary" size="wide"
            onClick={() => openWebsite(URL)}>
          <Localized id="banner-action-learn-more">
          <span>lEaRn MoRe</span>
          </Localized>
        </Button>
      </div>
    </Banner>
  )
}
