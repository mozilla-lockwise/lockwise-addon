/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";
import DocumentTitle from "react-document-title";

import AllItems from "../containers/all-items";
import CurrentBreadcrumbs from "../containers/current-breadcrumbs";
import CurrentSelection from "../containers/current-selection";
import ModalRoot from "../containers/modals";
import OpenFAQ from "../containers/open-faq";
import Toolbar, { ToolbarSpace } from "../../../widgets/toolbar";

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
            <section className={styles.appMain}>
              <AllItems className={styles.aside}
                        inputRef={(element) => {
                          this._filterField = element;
                        }}/>
              <article>
                <Toolbar className={styles.navigation}>
                  <CurrentBreadcrumbs/>
                  <ToolbarSpace/>
                  <OpenFAQ/>
                </Toolbar>
                <CurrentSelection/>
              </article>
            </section>
            <ModalRoot/>
          </div>
        </DocumentTitle>
      </Localized>
    );
  }
}
