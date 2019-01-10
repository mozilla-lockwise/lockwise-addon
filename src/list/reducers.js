/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as actions from "./actions";
import { makeItemSummary } from "../common";
import { NEW_ITEM_ID } from "./common";

function maybeAddCurrentItem(state, action) {
  if (action.interactive) {
    return {currentItem: action.item};
  }
  return {};
}

function maybeUpdateCurrentItem(state, action) {
  if (state.currentItem && state.currentItem.id === action.item.id) {
    return {currentItem: action.item};
  }
  return {};
}

function maybeRemoveCurrentItem(state, action) {
  if (state.currentItem && state.currentItem.id === action.id) {
    return {currentItem: null};
  }
  return {};
}

export function cacheReducer(state = {items: [], currentItem: null}, action) {
  switch (action.type) {
  case actions.LIST_ITEMS_COMPLETED:
    return {
      ...state,
      items: action.items,
    };
  case actions.ADD_ITEM_COMPLETED:
    return {
      ...state,
      items: [
        // HACK: add dispatched via Logins API events may be a duplicate
        // of an add we just completed in this UI - this filter makes it
        // idempotent
        ...state.items.filter(x => x.id != action.item.id),
        makeItemSummary(action.item),
      ],
      ...maybeAddCurrentItem(state, action),
    };
  case actions.UPDATE_ITEM_COMPLETED:
    return {
      ...state,
      items: state.items.map((x) => {
        if (x.id === action.item.id) {
          return makeItemSummary(action.item);
        }
        return x;
      }),
      ...maybeUpdateCurrentItem(state, action),
    };
  case actions.REMOVE_ITEM_COMPLETED:
    return {
      ...state,
      items: state.items.filter((x) => x.id !== action.id),
      ...maybeRemoveCurrentItem(state, action),
    };
  case actions.SELECT_ITEM_COMPLETED:
    return {...state, currentItem: action.item};
  case actions.START_NEW_ITEM:
    return {...state, currentItem: null};
  default:
    return state;
  }
}

export function listReducer(state = {
  selectedItemId: null, filter: {query: "", userEntered: true},
}, action) {
  switch (action.type) {
  case actions.ADD_ITEM_COMPLETED:
    if (action.interactive) {
      return {...state, selectedItemId: action.item.id};
    }
    return state;
  case actions.SELECT_ITEM_STARTING:
    return {...state, selectedItemId: action.id};
  case actions.START_NEW_ITEM:
    return {...state, selectedItemId: NEW_ITEM_ID};
  case actions.CANCEL_EDITING:
    if (state.selectedItemId === NEW_ITEM_ID) {
      return {...state, selectedItemId: null};
    }
    return state;
  case actions.FILTER_ITEMS:
    return {...state, filter: {
      query: action.filter,
      userEntered: action.userEntered,
    }};
  default:
    return state;
  }
}
