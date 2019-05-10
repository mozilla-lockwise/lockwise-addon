/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const LIST_ITEMS_STARTING = Symbol("LIST_ITEMS_STARTING");
export const LIST_ITEMS_COMPLETED = Symbol("LIST_ITEMS_COMPLETED");

export const ADD_ITEM_STARTING = Symbol("ADD_ITEM_STARTING");
export const ADD_ITEM_COMPLETED = Symbol("ADD_ITEM_COMPLETED");
export const ADD_ITEM_FAILED = Symbol("ADD_ITEM_FAILED");

export const UPDATE_ITEM_STARTING = Symbol("UPDATE_ITEM_STARTING");
export const UPDATE_ITEM_COMPLETED = Symbol("UPDATE_ITEM_COMPLETED");
export const UPDATE_ITEM_FAILED = Symbol("UPDATE_ITEM_FAILED");

export const REMOVE_ITEM_STARTING = Symbol("REMOVE_ITEM_STARTING");
export const REMOVE_ITEM_COMPLETED = Symbol("REMOVE_ITEM_COMPLETED");

export const REMOVED_ALL_ITEMS = Symbol("REMOVED_ALL_ITEMS");

export const SELECT_ITEM_STARTING = Symbol("SELECT_ITEM_STARTING");
export const SELECT_ITEM_COMPLETED = Symbol("SELECT_ITEM_COMPLETED");

export const COPIED_FIELD_STARTING = Symbol("COPIED_FIELD_STARTING");
export const COPIED_FIELD_COMPLETED = Symbol("COPIED_FIELD_COMPLETED");

export const START_NEW_ITEM = Symbol("START_NEW_ITEM");
export const EDIT_CURRENT_ITEM = Symbol("EDIT_CURRENT_ITEM");
export const EDITOR_CHANGED = Symbol("EDITOR_CHANGED");
export const CANCEL_EDITING = Symbol("CANCEL_EDITING");

export const FILTER_ITEMS = Symbol("FILTER_ITEMS");

export const SORT_BY_NAME = Symbol("SORT_BY_NAME");
export const SORT_BY_LAST_USED = Symbol("SORT_BY_LAST_USED");
export const SORT_BY_LAST_CHANGED = Symbol("SORT_BY_LAST_CHANGED");

export const SHOW_MODAL = Symbol("SHOW_MODAL");
export const HIDE_MODAL = Symbol("HIDE_MODAL");

export const GET_PROFILE = Symbol("GET_PROFILE");
export const GET_PROFILE_STARTING = Symbol("GET_PROFILE_STARTING");
export const UPDATED_PROFILE = Symbol("UPDATED_PROFILE");

export const OPEN_FAQ = Symbol("OPEN_FAQ");
export const OPEN_FEEDBACK = Symbol("OPEN_FEEDBACK");
export const OPEN_SYNC_PREFS = Symbol("OPEN_SYNC_PREFS");
export const SHOW_PROFILE_MENU = Symbol("SHOW_PROFILE_MENU");
export const OPEN_WEBSITE = Symbol("OPEN_WEBSITE");
export const OPEN_HOMEPAGE = Symbol("OPEN_HOMEPAGE");
export const OPEN_APP_STORE = Symbol("OPEN_APP_STORE");
export const OPEN_PLAY_STORE = Symbol("OPEN_PLAY_STORE");

export const REVEAL_PASSWORD = Symbol("REVEAL_PASSWORD");
export const CONCEAL_PASSWORD = Symbol("CONCEAL_PASSWORD");

// The action ID is used for debugging to correlate async actions with each
// other (i.e. FOO_STARTING and FOO_COMPLETED).
let nextActionId = 0;

export function listItems() {
  return async (dispatch) => {
    const actionId = nextActionId++;
    dispatch(listItemsStarting(actionId));

    const response = await browser.runtime.sendMessage({
      type: "list_items",
    });
    dispatch(listItemsCompleted(actionId, response.items));
  };
}

function listItemsStarting(actionId) {
  return {
    type: LIST_ITEMS_STARTING,
    actionId,
  };
}

function listItemsCompleted(actionId, items) {
  return {
    type: LIST_ITEMS_COMPLETED,
    actionId,
    items,
  };
}

export function addItem(details) {
  return async (dispatch) => {
    const actionId = nextActionId++;
    dispatch(addItemStarting(actionId, details));

    let response, exceptionExists = false;

    try {
      response = await browser.runtime.sendMessage({
        type: "add_item",
        item: details,
      });
    } catch (ex) {
      exceptionExists = true;
      dispatch(addItemFailed(actionId, details, ex));
    }

    if (!exceptionExists) {
      dispatch(addItemCompleted(actionId, response.item, true));
    }
  };
}

export function addedItem(item) {
  return addItemCompleted(undefined, item);
}

function addItemFailed(actionId, item, error) {
  return {
    type: ADD_ITEM_FAILED,
    actionId,
    item,
    error,
  };
}

function updateItemFailed(actionId, item, error) {
  return {
    type: UPDATE_ITEM_FAILED,
    actionId,
    item,
    error,
  };
}

function addItemStarting(actionId, item) {
  return {
    type: ADD_ITEM_STARTING,
    actionId,
    item,
  };
}

// `interactive` refers to actions that occurred as a result of the user doing
// something in the *current* view (as opposed to an action triggered by another
// view).
function addItemCompleted(actionId, item, interactive = false) {
  return {
    type: ADD_ITEM_COMPLETED,
    actionId,
    item,
    interactive,
  };
}

export function updateItem(item) {
  return async (dispatch) => {
    const actionId = nextActionId++;
    dispatch(updateItemStarting(actionId, item));

    let response, exceptionExists = false;

    try {
      response = await browser.runtime.sendMessage({
        type: "update_item",
        item,
      });
    } catch (ex) {
      exceptionExists = true;
      dispatch(updateItemFailed(actionId, item, ex));
    }

    if (!exceptionExists) {
      dispatch(updateItemCompleted(actionId, response.item, true));
    }
  };
}

export function updatedItem(item) {
  return updateItemCompleted(undefined, item);
}

function updateItemStarting(actionId, item) {
  return {
    type: UPDATE_ITEM_STARTING,
    actionId,
    item,
  };
}

// `interactive` refers to actions that occurred as a result of the user doing
// something in the *current* view (as opposed to an action triggered by another
// view).
function updateItemCompleted(actionId, item, interactive = false) {
  return {
    type: UPDATE_ITEM_COMPLETED,
    actionId,
    item,
    interactive,
  };
}

export function requestRemoveItem(id) {
  return showModal("delete", {itemId: id});
}

export function removeItem(id) {
  return async (dispatch) => {
    const actionId = nextActionId++;
    dispatch(removeItemStarting(actionId, id));
    await browser.runtime.sendMessage({
      type: "remove_item",
      id,
    });
    dispatch(removeItemCompleted(actionId, id, true));
  };
}

export function removedItem(id) {
  return removeItemCompleted(undefined, id);
}

function removeItemStarting(actionId, id) {
  return {
    type: REMOVE_ITEM_STARTING,
    actionId,
    id,
  };
}

function removeItemCompleted(actionId, id, interactive = false) {
  return {
    type: REMOVE_ITEM_COMPLETED,
    actionId,
    id,
    interactive,
  };
}

export function removedAllItems() {
  return {
    type: REMOVED_ALL_ITEMS,
  };
}

export function requestSelectItem(id) {
  return async (dispatch, getState) => {
    const {editor: {changed}} = getState();
    if (!changed) {
      dispatch(selectItem(id));
      return;
    }
    await dispatch(showModal("cancel-editing", {nextItemId: id}));
  };
}

export function selectItem(id) {
  return async (dispatch) => {
    const actionId = nextActionId++;
    dispatch(selectItemStarting(actionId, id));

    if (id === null) {
      dispatch(selectItemCompleted(actionId, null));
      return;
    }

    const response = await browser.runtime.sendMessage({
      type: "get_item",
      id,
    });
    dispatch(selectItemCompleted(actionId, response.item));
  };
}

function selectItemStarting(actionId, id) {
  return {
    type: SELECT_ITEM_STARTING,
    actionId,
    id,
  };
}

function selectItemCompleted(actionId, item) {
  return {
    type: SELECT_ITEM_COMPLETED,
    actionId,
    item,
  };
}

export function copiedField(field, toCopy, item) {
  return async (dispatch) => {
    const actionId = nextActionId++;
    dispatch(copiedFieldStarting(actionId));
    await browser.runtime.sendMessage({
      type: "copied_field",
      field,
      toCopy,
      item,
    });
    dispatch(copiedFieldCompleted(actionId, field, item));
  };
}

function copiedFieldStarting(actionId) {
  return {
    type: COPIED_FIELD_STARTING,
    actionId,
  };
}

function copiedFieldCompleted(actionId, field, item) {
  return {
    type: COPIED_FIELD_COMPLETED,
    actionId,
    field,
    item,
  };
}

export function startNewItem() {
  return {
    type: START_NEW_ITEM,
  };
}

export function editCurrentItem() {
  return {
    type: EDIT_CURRENT_ITEM,
  };
}

export function editorChanged() {
  return {
    type: EDITOR_CHANGED,
  };
}

export function requestCancelEditing() {
  return (dispatch, getState) => {
    const {editor: {changed}} = getState();
    if (!changed) {
      dispatch(cancelEditing());
      return;
    }
    dispatch(showModal("cancel-editing"));
  };
}

export function cancelEditing() {
  return {
    type: CANCEL_EDITING,
  };
}

export function filterItems(filter, userEntered = true) {
  return {
    type: FILTER_ITEMS,
    filter,
    userEntered,
  };
}

function showModal(id, props = {}) {
  return {
    type: SHOW_MODAL,
    id,
    props,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function openFAQ(target, close) {
  return {
    type: OPEN_FAQ,
    target,
    close,
  };
}

export function openFeedback() {
  return {
    type: OPEN_FEEDBACK,
  };
}

export function openHomepage() {
  return {
    type: OPEN_HOMEPAGE,
  };
}

export function getProfile() {
  return async (dispatch) => {
    dispatch(getProfileStarting());
    const profile = await browser.runtime.sendMessage({ type: "get_profile" });
    dispatch(getProfileCompleted(profile));
  };
}
const getProfileStarting = () => ({ type: GET_PROFILE_STARTING });
const getProfileCompleted = profile => updatedProfile(profile);

export function updatedProfile(profile) {
  return {
    type: UPDATED_PROFILE,
    profile,
  };
}

export function openSyncPrefs(menuItem) {
  return {
    type: OPEN_SYNC_PREFS,
    id: menuItem,
  };
}

export function openGetMobile() {
  return async (dispatch) => {
    dispatch(showModal("connect-another-device"));
  };
}

export function openProfileMenu() {
  return {
    type: SHOW_PROFILE_MENU,
  };
}

export function revealPassword(id) {
  return {
    type: REVEAL_PASSWORD,
    id,
  };
}

export function concealPassword(id) {
  return {
    type: CONCEAL_PASSWORD,
    id,
  };
}

export function openWebsite() {
  return {
    type: OPEN_WEBSITE,
  };
}

export function openPlayStore() {
  return {
    type: OPEN_PLAY_STORE,
  };
}

export function openAppStore() {
  return {
    type: OPEN_APP_STORE,
  };
}
