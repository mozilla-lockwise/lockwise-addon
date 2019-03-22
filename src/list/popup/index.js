/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AppLocalizationProvider from "../../l10n";
import App from "./components/app";
import { filterItems, listItems, getProfile } from "../actions";
import reducer from "./reducers";
import initializeMessagePorts from "../message-ports";
import * as telemetry from "../../telemetry";
import telemetryLogger from "./telemetry";

const store = createStore(reducer, undefined, applyMiddleware(
  thunk, telemetryLogger
));

// Pre-fill the URL of the current tab.
// XXX: Eventually, we'll probably want to put this in another file.
browser.tabs.query({ active: true, currentWindow: true }).then((result) => {
  const validProtocols = ["http:", "https:"];
  const url = new URL(result[0].url);
  if (validProtocols.includes(url.protocol)) {
    store.dispatch(filterItems(url.hostname, false));
  }
});

store.dispatch(listItems());
initializeMessagePorts(store);
store.dispatch(getProfile());

telemetry.recordEvent("render", "doorhanger");

ReactDOM.render(
  <Provider store={store}>
    <AppLocalizationProvider bundles={["list", "widgets"]}
                             userLocales={navigator.languages}>
      <App/>
    </AppLocalizationProvider>
  </Provider>,
  document.getElementById("content")
);
