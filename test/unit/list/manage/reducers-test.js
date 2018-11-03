/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";

import * as actions from "src/list/actions";
import {
  editorReducer, modalReducer,
} from "src/list/manage/reducers";

describe("list > manage > reducers", () => {
  describe("editor reducer", () => {
    it("initial state", () => {
      expect(editorReducer(undefined, {})).to.deep.equal({
        editing: false,
        changed: false,
        hideHome: false,
      });
    });

    describe("handle ADD_ITEM_COMPLETED", () => {
      it("interactive", () => {
        const state = {
          editing: true,
          changed: true,
          hideHome: false,
        };
        const action = {
          type: actions.ADD_ITEM_COMPLETED,
          actionId: 0,
          item: { id: "1" },
          interactive: true,
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: false,
          changed: false,
          hideHome: false,
        });
      });

      it("non-interactive", () => {
        const state = {
          editing: true,
          changed: true,
          hideHome: false,
        };
        const action = {
          type: actions.ADD_ITEM_COMPLETED,
          actionId: 0,
          item: { id: "1" },
          interactive: false,
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: true,
          changed: true,
          hideHome: false,
        });
      });
    });

    describe("handle UPDATE_ITEM_COMPLETED", () => {
      it("interactive", () => {
        const state = {
          editing: true,
          changed: true,
          hideHome: false,
        };
        const action = {
          type: actions.UPDATE_ITEM_COMPLETED,
          actionId: 0,
          item: { id: "1" },
          interactive: true,
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: false,
          changed: false,
          hideHome: false,
        });
      });

      it("non-interactive", () => {
        const state = {
          editing: true,
          changed: true,
          hideHome: false,
        };
        const action = {
          type: actions.UPDATE_ITEM_COMPLETED,
          actionId: 0,
          item: { id: "1" },
          interactive: false,
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: true,
          changed: true,
          hideHome: false,
        });
      });
    });

    describe("handle SELECT_ITEM_*", () => {
      it("handle SELECT_ITEM_STARTING (not editing)", () => {
        const state = {
          editing: false,
          changed: false,
          hideHome: false,
        };
        const action = {
          type: actions.SELECT_ITEM_STARTING,
          actionId: 0,
          id: "1",
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: false,
          changed: false,
          hideHome: false,
        });
      });

      it("handle SELECT_ITEM_STARTING (editing)", () => {
        const state = {
          editing: true,
          changed: true,
          hideHome: false,
        };
        const action = {
          type: actions.SELECT_ITEM_STARTING,
          actionId: 0,
          id: "1",
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: false,
          changed: false,
          hideHome: true,
        });
      });

      it("handle SELECT_ITEM_COMPLETED", () => {
        const state = {
          editing: false,
          changed: false,
          hideHome: true,
        };
        const action = {
          type: actions.SELECT_ITEM_COMPLETED,
          actionId: 0,
          item: { id: "1" },
        };

        expect(editorReducer(state, action)).to.deep.equal({
          editing: false,
          changed: false,
          hideHome: false,
        });
      });
    });

    it("handle START_NEW_ITEM", () => {
      const action = {
        type: actions.START_NEW_ITEM,
      };

      expect(editorReducer(undefined, action)).to.deep.equal({
        editing: true,
        changed: false,
        hideHome: false,
      });
    });

    it("handle EDIT_CURRENT_ITEM", () => {
      const action = {
        type: actions.EDIT_CURRENT_ITEM,
      };

      expect(editorReducer(undefined, action)).to.deep.equal({
        editing: true,
        changed: false,
        hideHome: false,
      });
    });

    it("handle EDITOR_CHANGED", () => {
      const state = {
        editing: true,
        changed: false,
        hideHome: false,
      };
      const action = {
        type: actions.EDITOR_CHANGED,
      };

      expect(editorReducer(state, action)).to.deep.equal({
        editing: true,
        changed: true,
        hideHome: false,
      });
    });

    it("handle CANCEL_EDITING", () => {
      const state = {
        editing: true,
        changed: true,
        hideHome: false,
      };
      const action = {
        type: actions.CANCEL_EDITING,
      };

      expect(editorReducer(state, action)).to.deep.equal({
        editing: false,
        changed: false,
        hideHome: false,
      });
    });
  });

  describe("modal reducer", () => {
    it("initial state", () => {
      expect(modalReducer(undefined, {})).to.deep.equal({
        id: null,
        props: null,
      });
    });

    it("handle SHOW_MODAL", () => {
      const action = {
        type: actions.SHOW_MODAL,
        id: "my_modal",
        props: {prop: "value"},
      };

      expect(modalReducer(undefined, action)).to.deep.equal({
        id: "my_modal",
        props: {prop: "value"},
      });
    });

    it("handle HIDE_MODAL", () => {
      const state = {
        id: "my_modal",
        props: {prop: "value"},
      };
      const action = {
        type: actions.HIDE_MODAL,
      };

      expect(modalReducer(state, action)).to.deep.equal({
        id: null,
        props: null,
      });
    });
  });
});
