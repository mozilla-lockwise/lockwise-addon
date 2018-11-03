/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import PropTypes from "prop-types";
import React from "react";

import styles from "./intro-page.css";

function IntroImage({src, title, children}) {
  return (
    <div className={styles.introImage}>
      <img src={src} alt=""/>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}

IntroImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default function IntroPage() {
  return (
    <article className={styles.introPage}>
      <section className={styles.introImages}>
        <Localized id="intro-page-step-1" attrs={{title: true}}>
          <IntroImage src={browser.extension.getURL("/images/intro-step-1.png")}
                      title="aDd lOGIn iNFo to lOCKBOx">
            sAVe uSERNAMe aNd pASSWORd...
          </IntroImage>
        </Localized>
        <Localized id="intro-page-step-2" attrs={{title: true}}>
          <IntroImage src={browser.extension.getURL("/images/intro-step-2.png")}
                      title="go sTRAIGHt to yOUr lOGINs">
            cLICk tHe lOCKBOx iCOn...
          </IntroImage>
        </Localized>
        <Localized id="intro-page-step-3" attrs={{title: true}}>
          <IntroImage src={browser.extension.getURL("/images/intro-step-3.png")}
                      title="sIGn in fROm lOCKBOx">
            cOPy an eNTRY&apos;s iNFo...
          </IntroImage>
        </Localized>
      </section>
    </article>
  );
}
