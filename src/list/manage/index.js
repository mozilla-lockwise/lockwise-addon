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
import { listItems, getProfile } from "../actions";
import reducer from "./reducers";
import initializeMessagePorts from "../message-ports";
import telemetryLogger from "./telemetry";
import { saveSort, loadSort } from "./sort-middleware";
import openLink from "../open-link-middleware";

let store;
(async () => {
  const storedSort = await loadSort();
  const preloadedState = storedSort ? { cache: { sort: storedSort }} : undefined;

  store = createStore(reducer, preloadedState, applyMiddleware(
    thunk, telemetryLogger, saveSort, openLink,
  ));
  store.dispatch(listItems());
  initializeMessagePorts(store);
  store.dispatch(getProfile());

  ReactDOM.render(
    <Provider store={store}>
      <AppLocalizationProvider bundles={["list", "widgets", "common"]}
                               userLocales={navigator.languages}>
        <App/>
      </AppLocalizationProvider>
    </Provider>,
    document.getElementById("content")
  );
})();
