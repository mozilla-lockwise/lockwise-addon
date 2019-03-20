/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";
import DocumentTitle from "react-document-title";

import ErrorNotification from "../../containers/connected-error-notification";
import AppHeader from "../containers/app-header";
import AppPanes from "../containers/app-panes";
import AllItems from "../containers/all-items";
import CurrentSelection from "../containers/current-selection";
import ModalRoot from "../containers/modals";

import styles from "./app.css";

export default class App extends React.Component {
  componentDidMount() {
    this._filterField.focus(true);
  }

  render() {
    return (
      <Localized id="document" attrs={{title: true}}>
        <DocumentTitle title="lOCKBOx eNTRIEs">
          <div className={styles.app}>
            <ErrorNotification isPanel={false}/>
            <AppHeader />
            <AppPanes>{{
              logins: (
                <section className={styles.appMain}>
                  <AllItems className={styles.aside}
                            inputRef={(element) => {
                              this._filterField = element;
                            }}/>
                  <article>
                    <CurrentSelection/>
                  </article>
                </section>
              ),
              /* TODO: Implement this as part of issue #15
              monitor: (
                <h1>
                  <a href="https://github.com/mozilla-lockbox/lockbox-addon/issues/15">
                    Monitor app content TBD in Issue #15
                  </a>
                </h1>
              ),
              */
            }}</AppPanes>
            <ModalRoot/>
          </div>
        </DocumentTitle>
      </Localized>
    );
  }
}
