/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";

import CurrentPromotionBanner from "../containers/connected-promote-banner";
import styles from "./homepage.css";

export default function Homepage() {
  return (
    <section className={styles.homepage}>
      <div className={styles.promotion}>
        <CurrentPromotionBanner />
      </div>
    </section>
  );
}
