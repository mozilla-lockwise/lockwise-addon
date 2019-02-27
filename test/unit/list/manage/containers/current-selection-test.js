/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import chaiFocus from "test/unit/chai-focus";
import { simulateTyping } from "test/unit/common";
import mountWithL10n, { mountWithL10nIntoDOM } from "test/unit/mocks/l10n";
import { initialState, filledState } from "../mock-redux-state";
import { NEW_ITEM_ID } from "src/list/common";
import * as actions from "src/list/actions";
import EditItemDetails from
       "src/list/manage/components/edit-item-details";
import Homepage from "src/list/manage/components/homepage";
import ItemDetails from "src/list/manage/components/item-details";
import CurrentSelection from
       "src/list/manage/containers/current-selection";

chai.use(chaiEnzyme());
chai.use(chaiFocus);

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("list > manage > containers > <CurrentSelection/>", () => {
  beforeEach(() => {
    browser.runtime.onMessage.addListener(() => ({}));
  });

  afterEach(() => {
    browser.runtime.onMessage.mockClearListener();
  });

  describe("nothing selected", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render item", () => {
      expect(wrapper).to.contain(Homepage);
    });
  });

  describe("item selected", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore(filledState);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render item", () => {
      expect(wrapper).to.contain(ItemDetails);
    });

    it("editCurrentItem() dispatched", () => {
      wrapper.findWhere((x) => x.prop("id") === "item-details-edit")
             .find("button").simulate("click");
      expect(store.getActions()[0]).to.deep.equal({
        type: actions.EDIT_CURRENT_ITEM,
      });
    });

    it('showModal("delete") dispatched', () => {
      wrapper.findWhere((x) => x.prop("id") === "item-details-delete")
             .find("button").simulate("click");
      expect(store.getActions()[0]).to.deep.equal({
        type: actions.SHOW_MODAL,
        id: "delete",
        props: {itemId: "1"},
      });
    });
  });

  describe("edit new item", () => {
    let store, wrapper;

    beforeEach(() => {
      const state = {
        ...filledState,
        cache: {
          ...filledState.cache,
          currentItem: null,
        },
        list: {
          ...filledState.list,
          selectedItemId: NEW_ITEM_ID,
        },
        editor: {
          ...filledState.editor,
          editing: true,
        },
      };
      store = mockStore(state);
      wrapper = mountWithL10nIntoDOM(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render item", () => {
      const details = wrapper.find(EditItemDetails);
      expect(details).to.have.length(1);
      expect(details.prop("fields")).to.deep.equal({
        origin: "",
        username: "",
        password: "",
      });
    });

    it("first field focused", () => {
      const firstField = wrapper.find("input").at(0);
      expect(firstField).to.be.focused();
    });

    it("editorChanged() dispatched", () => {
      simulateTyping(wrapper.find('input[name="username"]'), "new username");
      expect(store.getActions()).to.deep.equal([{
        type: actions.EDITOR_CHANGED,
      }]);
    });

    it("addItem() dispatched", () => {
      wrapper.find("#item-details-save-new")
             .find("button").simulate("submit");
      expect(store.getActions()[0]).to.deep.include({
        type: actions.ADD_ITEM_STARTING,
        item: {
          title: undefined,
          origins: [],
          id: undefined,
          realm: null,
          timeCreated: undefined,
          timeLastUsed: undefined,
          timePasswordChanged: undefined,
          entry: {
            kind: "login",
            password: "",
            username: "",
          },
        },
      });
    });

    it("cancelEditing() dispatched", () => {
      wrapper.find("#item-details-cancel")
             .find("button").simulate("click");
      expect(store.getActions()[0]).to.deep.equal({
        type: actions.CANCEL_EDITING,
      });
    });
  });

  describe("edit existing item", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore({...filledState, editor: {
        ...filledState.editor, editing: true,
      }});
      wrapper = mountWithL10nIntoDOM(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render item", () => {
      const details = wrapper.find(EditItemDetails);
      const currentItem = filledState.cache.currentItem;

      expect(details).to.have.length(1);

      expect(details.prop("fields")).to.deep.equal({
        title: currentItem.title,
        origin: currentItem.origins[0],
        formURL: currentItem.origins[1] || "",
        timeCreated: undefined,
        timeLastUsed: undefined,
        timePasswordChanged: undefined,
        realm: "",
        username: currentItem.entry.username,
        password: currentItem.entry.password,
      });
    });

    it("first field focused", () => {
      const firstField = wrapper.find("input").at(0);
      expect(firstField).to.be.focused();
    });

    it("editorChanged() dispatched", () => {
      simulateTyping(wrapper.find('input[name="username"]'), "new username");
      expect(store.getActions()).to.deep.equal([{
        type: actions.EDITOR_CHANGED,
      }]);
    });

    it("updateItem() dispatched", () => {
      wrapper.find("#item-details-save-existing")
             .find("button").simulate("submit");
      expect(store.getActions()[0]).to.deep.include({
        type: actions.UPDATE_ITEM_STARTING,
        item: {
          title: "title 1",
          origins: ["origin-1.com"],
          id: "1",
          realm: null,
          timeCreated: undefined,
          timeLastUsed: undefined,
          timePasswordChanged: undefined,
          entry: {
            kind: "login",
            password: "password 1",
            username: "username 1",
          },
        },
      });
    });

    it("cancelEditing() dispatched", () => {
      wrapper.findWhere((x) => x.prop("id") === "item-details-cancel")
             .find("button").simulate("click");
      expect(store.getActions()[0]).to.deep.include({
        type: actions.CANCEL_EDITING,
      });
    });
  });

  describe("edit existing item (no origin)", () => {
    let store, wrapper;
    let state = {
      ...filledState,
      cache: {
        ...filledState.cache,
        currentItem: {
          ...filledState.cache.currentItem,
          origins: [],
        },
      },
      editor: {
        ...filledState.editor,
        editing: true,
      },
    };

    beforeEach(() => {
      store = mockStore(state);
      wrapper = mountWithL10n(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render item", () => {
      const details = wrapper.find(EditItemDetails);
      const currentItem = state.cache.currentItem;
      expect(details).to.have.length(1);
      expect(details.prop("fields")).to.deep.equal({
        title: currentItem.title,
        origin: "",
        formURL: "",
        realm: "",
        timeCreated: undefined,
        timeLastUsed: undefined,
        timePasswordChanged: undefined,
        username: currentItem.entry.username,
        password: currentItem.entry.password,
      });
    });
  });

  describe("hide home", () => {
    let store, wrapper;

    beforeEach(() => {
      store = mockStore({
        ...initialState,
        editor: {...initialState.editor, hideHome: true},
      });
      wrapper = mountWithL10n(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );
    });

    it("render item", () => {
      expect(wrapper.find("div").children()).to.have.length(0);
    });
  });

  describe("show cancel editing modal", () => {
    it("editing new item", () => {
      const state = {
        ...filledState,
        cache: {
          ...filledState.cache,
          currentItem: null,
        },
        list: {
          ...filledState.list,
          selectedItemId: NEW_ITEM_ID,
        },
        editor: {
          ...filledState.editor,
          editing: true,
          changed: true,
        },
      };
      const store = mockStore(state);
      const wrapper = mountWithL10nIntoDOM(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );

      wrapper.find("#item-details-cancel")
             .find("button").simulate("click");
      expect(store.getActions()).to.deep.equal([
        { type: actions.SHOW_MODAL,
          id: "cancel-editing",
          props: {} },
      ]);
    });

    it("editing exiting item", () => {
      const store = mockStore({...filledState, editor: {
        ...filledState.editor, editing: true, changed: true,
      }});
      const wrapper = mountWithL10nIntoDOM(
        <Provider store={store}>
          <CurrentSelection/>
        </Provider>
      );

      wrapper.findWhere((x) => x.prop("id") === "item-details-cancel")
             .find("button").simulate("click");
      expect(store.getActions()).to.deep.equal([
        { type: actions.SHOW_MODAL,
          id: "cancel-editing",
          props: {} },
      ]);
    });
  });
});
