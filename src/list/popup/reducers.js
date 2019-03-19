/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { combineReducers } from "redux";

import { cacheReducer, listReducer, profileReducer } from "../reducers";

export default combineReducers({
  // we use combineReducers here to add another layer
  // in the object in order to match the pattern used
  // in manage/reducers.js
  app: combineReducers({profileReducer}),
  cache: cacheReducer,
  list: listReducer,
});
