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
import { listItems } from "../actions";
import reducer from "./reducers";
import initializeMessagePorts from "../message-ports";
import * as telemetry from "../../telemetry";
import telemetryLogger from "./telemetry";

const store = createStore(reducer, undefined, applyMiddleware(
  thunk, telemetryLogger
));
store.dispatch(listItems());
initializeMessagePorts(store);

telemetry.recordEvent("render", "manage");

ReactDOM.render(
  <Provider store={store}>
    <AppLocalizationProvider bundles={["list", "widgets", "common"]}
                             userLocales={navigator.languages}>
      <App/>
    </AppLocalizationProvider>
  </Provider>,
  document.getElementById("content")
);
