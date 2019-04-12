/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import { Link } from "../../../widgets/link";
import styles from "./intro-page.css";

export default function IntroPage({onLearnMore}) {
  return (
    <section className={styles.introPage}>
      <header>
        <Localized id="intro-page-header-title">
          <h2>fIREFOx lOCKBOx fOr dESKTOp</h2>
        </Localized>
        <Localized id="intro-page-header-subtitle">
          <p>iNTRo hEADEr sUBTITLe</p>
        </Localized>
      </header>

      <section className={styles.introMain}>
        <article>
          <Localized id="intro-page-main-article-1-title">
            <h3></h3>
          </Localized>

          <Localized id="intro-page-main-article-1-copy">
            <p></p>
          </Localized>
        </article>

        <article>
          <Localized id="intro-page-main-article-2-title">
            <h3></h3>
          </Localized>

          <Localized id="intro-page-main-article-2-copy">
            <p></p>
          </Localized>
        </article>

        <article>
          <Localized id="intro-page-main-article-3-title">
            <h3></h3>
          </Localized>

          <Localized id="intro-page-main-article-3-copy">
            <p></p>
          </Localized>
        </article>

        <article>
          <Localized id="intro-page-main-article-4-title">
            <h3></h3>
          </Localized>

          <Localized id="intro-page-main-article-4-copy">
            <p></p>
          </Localized>
        </article>
      </section>

      <hr />

      <footer>
        <Localized id="intro-page-footer-heading">
          <h2>iNTRo fOOTEr hEADEr</h2>
        </Localized>
        <Localized id="intro-page-footer-copy"
            go={
              <Link onClick={onLearnMore}/>
            }>
          <p>iNTRo fOOTEr cOPy <go>lEARn mORe</go></p>
        </Localized>
      </footer>
    </section>
  );
}

IntroPage.propTypes = {
  onLearnMore: PropTypes.func.isRequired,
};
