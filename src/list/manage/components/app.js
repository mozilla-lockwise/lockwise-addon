/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";
import DocumentTitle from "react-document-title";

import SyncNotification from "../../containers/connected-sync-notification";
import AppHeader from "../containers/app-header";
import AllItems from "../containers/all-items";
import CurrentSelection from "../containers/current-selection";
import ModalRoot from "../containers/modals";
import CurrentPromotionBanner from "../containers/connected-promote-banner";


import styles from "./app.css";

export default class App extends React.Component {
  componentDidMount() {
    this._filterField.focus(true);
  }

  render() {
    return (
      <Localized id="document" attrs={{title: true}}>
        <DocumentTitle title="lOCKWISe eNTRIEs">
          <div className={styles.app}>
            <SyncNotification isPanel={false}/>
            <AppHeader inputRef={(element) => {
              this._filterField = element;
            }}/>
            <section className={styles.appMain}>
              <AllItems className={styles.aside} />
              <article>
                <CurrentSelection/>
              </article>
            </section>
            <CurrentPromotionBanner />
            <ModalRoot/>
          </div>
        </DocumentTitle>
      </Localized>
    );
  }
}
