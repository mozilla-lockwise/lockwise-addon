/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Localized } from "fluent-react";
import React from "react";
import DocumentTitle from "react-document-title";

import CurrentSelection from "../containers/current-selection";

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
            <CurrentSelection inputRef={(element) => {
              this._filterField = element;
            }}/>
          </div>
        </DocumentTitle>
      </Localized>
    );
  }
}
