/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

class MockListener {
  constructor() {
    this.mockClearListener();
  }

  addListener(fn) {
    if (this._listener) {
      // eslint-disable-next-line no-console
      console.warn("Warning: only one listener supported; did you forget to " +
                   "call mockClearListener()?");
    }
    this._listener = fn;
  }

  removeListener(fn) {
    if (fn === this._listener) {
      this._listener = null;
    }
  }

  getListener() {
    return this._listener;
  }

  mockClearListener() {
    this._listener = null;
  }

  mockFireListener(...args) {
    if (this._listener) {
      return this._listener(...args);
    }
    return null;
  }
}

class MockOnMessageListener extends MockListener {
  mockFireListener(msg, sender) {
    if (this._listener) {
      if (this._listener.length >= 3) {
        return new Promise((resolve, reject) => {
          this._listener(msg, sender, resolve);
        });
      }
      return this._listener(msg, sender);
    }
    return null;
  }
}

let nextContextId = 1;
class MockMessageSender {
  constructor(contextId) {
    this.contextId = contextId === undefined ? nextContextId++ : contextId;
  }
}

// This is the message sender that matches the real sender's context most
// closely. It's useful for correlating connectionless messages with
// connection-based messages. Call browser.connect() to create the primary
// connection-based message port or browser.connect(..., {mockPrimary: false})
// to create a secondary one.
const primaryContextId = 0;
const primaryMessageSender = new MockMessageSender(primaryContextId);

class MockPort {
  constructor(sender) {
    this._otherPort = null;
    this.onMessage = new MockOnMessageListener();
    this.onDisconnect = new MockListener();
    if (sender) {
      this.sender = sender;
    }
  }

  postMessage(msg) {
    this._otherPort.onMessage.mockFireListener(msg);
  }

  disconnect() {
    this._otherPort.onDisconnect.mockFireListener();
  }
}

function makePairedPorts(contextId) {
  const left = new MockPort();
  const right = new MockPort(new MockMessageSender(contextId));
  left._otherPort = right;
  right._otherPort = left;
  return [left, right];
}

window.browser = {
  browserAction: {
    _popupPage: "",
    onClicked: new MockListener(),

    setPopup({popup}) {
      this._popupPage = popup;
    },

    async getPopup() {
      return this._popupPage;
    },

    setIcon() {},
  },

  extension: {
    getURL(path) {
      return path;
    },
  },

  runtime: {
    onMessage: new MockOnMessageListener(),
    onConnect: new MockListener(),

    async sendMessage(msg) {
      return this.onMessage.mockFireListener(msg, primaryMessageSender);
    },

    connect(extensionId, {mockPrimary = true} = {}) {
      const [left, right] = makePairedPorts(
        mockPrimary ? primaryContextId : undefined
      );
      this.onConnect.mockFireListener(right);
      return left;
    },
  },

  storage: {
    local: {
      get() {},
      set() {},
    },
  },

  tabs: {
    _openedTabs: [],
    _nextId: 1,

    create({url}) {
      const tabInfo = {id: this._nextId++, windowId: 1, url};
      this._openedTabs.push(tabInfo);
      return new Promise((resolve, reject) => {
        return resolve(tabInfo);
      });
    },

    remove(id) {
      const tabIndex = this._openedTabs.findIndex((i) => i.id === id);
      if (tabIndex === -1) {
        throw new Error("no such tab");
      }
      this._openedTabs.splice(tabIndex, 1);
    },

    get(id) {
      const tab = this._openedTabs.find((i) => i.id === id);
      if (!tab) {
        throw new Error("no such tab");
      }
      return tab;
    },

    update(id, props) {
      const tab = this.get(id);
      if ("url" in props) {
        tab.url = props.url;
      }
      return tab;
    },

    get mockAllTabs() {
      return this._openedTabs;
    },

    mockClearTabs() {
      this._openedTabs = [];
    },
  },

  windows: {
    update() {},
  },

  telemetry: {
    registerEvents(category, events) {},
    recordEvent(category, method, object, value, extra) {},

    registerScalars(category, scalars) {},
    scalarSet(name, value) {},
  },

  experiments: {
    logins: {
      async getLoginSavingEnabled() { },
      async setLoginSavingEnabled() { },
      async setOverrideManagementURI() { },
      async getAll() { return []; },
      async add(login) {
        browser.experiments.logins.onAdded.getListener()({ login });
      },
      async update(login) {
        browser.experiments.logins.onUpdated.getListener()({ login });
      },
      async remove(guid) {
        browser.experiments.logins.onRemoved.getListener()({ login: { guid } });
      },
      onAdded: new MockListener(),
      onUpdated: new MockListener(),
      onRemoved: new MockListener(),
      onAllRemoved: new MockListener(),
    },
    sync: {
      async getUserProfileInfo() { },
      async openPreferences() { },
      onUserProfileChanged: new MockListener(),
    },
  },
};
