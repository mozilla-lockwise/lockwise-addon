/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";

import styles from "./homepage.css";

export default function Homepage() {
  const imgSrc = browser.extension.getURL("/images/nessie_v2.svg");

  return (
    <article className={styles.homepage}>
      <img src={imgSrc} alt=""/>
      <Localized id="homepage-title">
        <h1>tHe sIMPLe wAy tO sTORE...</h1>
      </Localized>
    </article>
  );
}
