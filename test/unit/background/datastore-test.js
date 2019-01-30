/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect } from "chai";
import sinon from "sinon";

import "test/unit/mocks/browser";

import {
  initializeDataStore,
  openDataStore,
  closeDataStore,
  convertInfo2Item,
  convertItem2Info,
} from "src/background/datastore";

const LOGINS_METHODS = ["getAll", "add", "update", "remove"];
const LOGINS_EVENTS = [
  "Added",
  "Updated",
  "Removed",
  "AllRemoved",
].map(name => `on${name}`);

const cmpAlphaBy = name => (a, b) => a[name].localeCompare(b[name]);

const SAMPLE_INFOS = {
  FOO: {
    guid: "FOO",
    title: "FOO title",
    hostname: "https://foo.example.com",
    httpRealm: null,
    username: "FOOuser",
    password: "FOOpass",
    usernameField: "username",
    passwordField: "password",
    timesUsed: 1,
    timeLastUsed: new Date("2019-01-03T12:00:00Z"),
    timePasswordChanged: new Date("2019-01-02T12:00:00Z"),
    timeCreated: new Date("2019-01-01T12:00:00Z"),
  },
  BAR: {
    guid: "BAR",
    title: "BAR title",
    hostname: "https://www.bar.example.com",
    httpRealm: null,
    username: "BARuser",
    password: "BARpass",
    usernameField: "username",
    passwordField: "password",
    timesUsed: 0,
    timeLastUsed: new Date("2019-01-04T12:00:00Z"),
    timePasswordChanged: new Date("2019-01-03T12:00:00Z"),
    timeCreated: new Date("2019-01-02T12:00:00Z"),
  },
  BAZ: {
    guid: "BAZ",
    title: "BAZ title",
    hostname: "http://baz.example.com",
    httpRealm: null,
    username: "BAZuser",
    password: "BAZpass",
    usernameField: "username",
    passwordField: "password",
    timesUsed: 3,
    timeLastUsed: new Date("2019-01-05T12:00:00Z"),
    timePasswordChanged: new Date("2019-01-05T11:00:00Z"),
    timeCreated: new Date("2019-01-05T10:00:00Z"),
  },
};

describe("background > datastore", () => {
  let store;

  beforeEach(async () => {
    const infos = Object.values(SAMPLE_INFOS);
    sinon.stub(browser.experiments.logins, "getAll").resolves(infos);

    sinon
      .stub(browser.experiments.logins, "add")
      .callsFake(login =>
        browser.experiments.logins.onAdded.getListener()({ login }),
      );
    sinon
      .stub(browser.experiments.logins, "update")
      .callsFake(login =>
        browser.experiments.logins.onUpdated.getListener()({ login }),
      );
    sinon
      .stub(browser.experiments.logins, "remove")
      .callsFake(guid =>
        browser.experiments.logins.onRemoved.getListener()({ login: { guid } }),
      );

    await initializeDataStore();
    store = await openDataStore();
  });

  afterEach(async () => {
    for (let name of LOGINS_METHODS) {
      browser.experiments.logins[name].restore();
    }
    for (let name of LOGINS_EVENTS) {
      browser.experiments.logins[name].mockClearListener();
    }
    await closeDataStore();
  });

  it("sets up Logins API event listeners in initializeDataStore()", async () => {
    for (let name of LOGINS_EVENTS) {
      const ev = browser.experiments.logins[name];
      expect(ev.getListener()).to.be.a("function");
    }
  });

  it("yields a datastore instance from openDataStore()", async () => {
    const store = await openDataStore();
    expect(store).to.not.be.undefined;
    const expectedLength = Object.values(SAMPLE_INFOS).length;
    expect(await store.list()).to.have.length(expectedLength);
  });

  it("fetches initial items from Logins API", async () => {
    expect(browser.experiments.logins.getAll.callCount).to.equal(1);

    // TODO: Issue #21 should do away with item/info conversion
    const expectedItems = Object.values(SAMPLE_INFOS)
      .map(convertInfo2Item)
      .sort(cmpAlphaBy("id"));
    const resultItems = (await store.list()).sort(cmpAlphaBy("id"));

    expect(resultItems).to.deep.equal(expectedItems);
  });

  it("handles onAdded event from Logins API", async () => {
    const beforeItem = await store.get("XYZZY");
    expect(beforeItem).to.equal(null);

    const info = {
      guid: "XYZZY",
      title: "XYZZY title",
      hostname: "http://XYZZY.example.com",
      httpRealm: null,
      username: "XYZZYuser",
      password: "XYZZYpass",
      usernameField: "username",
      passwordField: "password",
    };

    const addedListener = browser.experiments.logins.onAdded.getListener();
    addedListener({ login: info });

    // TODO: Issue #21 should do away with item/info conversion
    const expectedItem = convertInfo2Item(info);
    const afterItem = await store.get("XYZZY");
    expect(afterItem).to.deep.equal(expectedItem);
  });

  it("handles onUpdated event from Logins API", async () => {
    const info = {
      ...SAMPLE_INFOS.FOO,
      password: "updated FOO password",
    };

    const updatedListener = browser.experiments.logins.onUpdated.getListener();
    updatedListener({ login: info });

    // TODO: Issue #21 should do away with item/info conversion
    const expectedItem = convertInfo2Item(info);
    const resultItem = await store.get("FOO");
    expect(resultItem).to.deep.equal(expectedItem);
  });

  it("handles onRemoved event from Logins API", async () => {
    const info = {
      ...SAMPLE_INFOS.BAR,
      password: "updated BAR password",
    };

    const removedListener = browser.experiments.logins.onRemoved.getListener();
    removedListener({ login: info });

    const resultItem = await store.get("BAR");
    expect(resultItem).to.equal(null);
  });

  it("handles onAllRemoved event from Logins API", async () => {
    const info = {
      title: "QUUX title",
      hostname: "http://quux.example.com",
      formSubmitURL: "http://quux.example.com",
      httpRealm: null,
      username: "QUUXuser",
      password: "QUUXpass",
      usernameField: "username",
      passwordField: "password",
    };
    const item = convertInfo2Item(info);

    // TODO: Issue #21 should do away with item/info conversion
    const addedItem = await store.add(item);

    const beforeItem = await store.get(addedItem.id);
    expect(beforeItem).to.deep.equal(addedItem);

    const allRemovedListener =
      browser.experiments.logins.onAllRemoved.getListener();
    allRemovedListener();

    const afterItem = await store.get(addedItem.id);
    expect(afterItem).to.be.null;
  });

  it("allows an item to be fetched", async () => {
    // TODO: Issue #21 should do away with item/info conversion
    const expectedItem = convertInfo2Item(SAMPLE_INFOS.FOO);
    const resultItem = await store.get("FOO");
    expect(resultItem).to.deep.equal(expectedItem);
  });

  it("allows an item to be added", async () => {
    const info = {
      title: "QUUX title",
      hostname: "http://quux.example.com",
      formSubmitURL: "http://quux.example.com",
      httpRealm: null,
      username: "QUUXuser",
      password: "QUUXpass",
      usernameField: "username",
      passwordField: "password",
    };
    const item = convertInfo2Item(info);

    // TODO: Issue #21 should do away with item/info conversion
    const addedItem = await store.add(item);
    const expectedItem = {
      ...item,
      id: addedItem.id,
    };
    expect(addedItem).to.deep.equal(expectedItem);

    const resultItem = await store.get(addedItem.id);
    expect(resultItem).to.deep.equal(addedItem);

    const apiAdd = browser.experiments.logins.add;
    expect(apiAdd.callCount).to.equal(1);

    const expectedApiInfo = {
      // TODO: Issue #21 should do away with item/info conversion
      // A double conversion - semi-reflects what happens.
      ...convertItem2Info(item),
      guid: addedItem.id,
    };

    const {
      timesUsed,
      timeLastUsed,
      timeCreated,
      timePasswordChanged,
      ...resultApiInfo
    } = apiAdd.lastCall.lastArg;

    expect(timesUsed).to.equal(0);
    expect(timeLastUsed).to.not.be.undefined;
    expect(timeCreated).to.not.be.undefined;
    expect(timePasswordChanged).to.not.be.undefined;
    expect(resultApiInfo).to.deep.equal(expectedApiInfo);
  });

  it("allows an item to be updated", async () => {
    const id = "BAR";

    const originalItem = await store.get(id);
    const expectedItem = {
      ...originalItem,
      entry: {
        ...originalItem.entry,
        password: "updated password",
      },
    };

    const updatedItem = await store.update(expectedItem);
    expect(updatedItem).to.deep.equal(expectedItem);

    const fetchedItem = await store.get(id);
    expect(fetchedItem).to.deep.equal(expectedItem);

    const apiUpdate = browser.experiments.logins.update;
    expect(apiUpdate.callCount).to.equal(1);

    const expectedApiInfo = {
      // TODO: Issue #21 should do away with item/info conversion
      // A double conversion - semi-reflects what happens.
      ...convertItem2Info(expectedItem),
      guid: expectedItem.id,
    };

    const {
      timePasswordChanged,
      ...resultApiInfo
    } = apiUpdate.lastCall.lastArg;

    expect(timePasswordChanged).to.not.be.undefined;
    expect(resultApiInfo).to.deep.equal(expectedApiInfo);
  });

  it("allows an item to be removed", async () => {
    const id = "BAZ";

    const beforeItem = await store.get(id);
    expect(beforeItem).to.not.equal(null);

    const removedItem = await store.remove(id);
    expect(removedItem).to.deep.equal(beforeItem);

    const afterItem = await store.get(id);
    expect(afterItem).to.equal(null);

    const apiRemove = browser.experiments.logins.remove;
    expect(apiRemove.callCount).to.equal(1);
    expect(apiRemove.lastCall.lastArg).to.equal(id);
  });

  describe("hostname to title conversion", () => {
    let info = Object.assign({}, SAMPLE_INFOS.FOO);
    it("removes the initial 'https://' part of a hostname", () => {
      info.hostname = "https://example.com";
      const item = convertInfo2Item(info);
      expect(item.title).to.equal("example.com");
    });
    it("removes the initial 'http://' part of a hostname", () => {
      info.hostname = "http://example.com";
      const item = convertInfo2Item(info);
      expect(item.title).to.equal("example.com");
    });
    it("removes the 'www' subdomain", () => {
      info.hostname = "http://www.example.com";
      const item = convertInfo2Item(info);
      expect(item.title).to.equal("example.com");
    });
    it("removes the 'www1' subdomain", () => {
      info.hostname = "http://www1.example.com";
      const item = convertInfo2Item(info);
      expect(item.title).to.equal("example.com");
    });
    it("does not remove the 'foo' subdomain", () => {
      info.hostname = "http://foo.example.com";
      const item = convertInfo2Item(info);
      expect(item.title).to.equal("foo.example.com");
    });
    it("does not remove the '.com' public suffix", () => {
      info.hostname = "https://www.example.com";
      const item = convertInfo2Item(info);
      expect(item.title.endsWith(".com")).to.be.true;
    });
  });
});
