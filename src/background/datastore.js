/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import UUID from "uuid";

import telemetry from "./telemetry";

function convertInfo2Item(info) {
  let title;
  try {
    title = (new URL(info.hostname)).host;
  } catch (ex) {
    title = info.hostname;
  }
  title = title.replace(/^http(s)?:\/\//, "").
                replace(/^www\./, "");

  const id = info.guid;
  const origins = [ info.hostname, info.formSubmitURL ].
      filter((u) => !!u);

  let item = {
    id,
    title,
    origins,
    realm: info.httpRealm,
    tags: [],
    entry: {
      kind: "login",
      username: info.username,
      password: info.password,
      usernameField: info.usernameField,
      passwordField: info.passwordField,
    },
  };
  return item;
}
function convertItem2Info(item) {
  // dropped on the floor (for now ...)
  // * title
  // * tags
  // * entry.notes
  // * history

  // item.id ==> info.guid
  // item.title ==> undefined
  // item.tags ==> undefined
  // item.origins[0] ==> info.hostname
  // item.origins[1] || null ==> info.formSubmitURL
  // item.entry.kind ==> undefined
  // item.entry.username ==> info.username
  // item.entry.password ==> info.password
  // item.entry.usernameField || "" ==> info.usernameField
  // item.entry.passwordField || "" ==> info.passwordField
  // item.entry.notes ==> info.undefined
  const guid = item.id;
  const hostname = item.origins[0];
  const formSubmitURL = item.origins[1] || null;
  const httpRealm = item.realm || null;
  const username = item.entry.username;
  const password = item.entry.password;
  const usernameField = item.entry.usernameField || "";
  const passwordField = item.entry.passwordField || "";

  let info = {
    guid,
    hostname,
    formSubmitURL,
    httpRealm,
    username,
    password,
    usernameField,
    passwordField,
  };

  return info;
}

async function recordMetric(method, itemid, fields) {
  let extra = {
    itemid,
  };
  if (fields) {
    extra = {
      ...extra,
      fields,
    };
  }
  telemetry.recordEvent(method, "datastore", extra);
}

class DataStore {
  constructor() {
    this._all = {};
  }

  async _allLogins() {
    return Object.values(this._all);
  }

  async list() {
    const logins = await this._allLogins();
    const items = logins.map(convertInfo2Item);

    return items;
  }
  async get(id) {
    let one = this._all[id];
    if (one) {
      one = convertInfo2Item(one);
    }

    return one || null;
  }
  async add(item) {
    if (!item) {
      throw new TypeError("invalid item");
    }

    let info = convertItem2Info(item);
    if (!info.hostname) {
      throw new TypeError("missing hostname");
    }
    if (!info.password) {
      throw new TypeError("missing password");
    }
    if (!info.username) {
      info.username = "";
    }

    if (!info.formSubmitURL && !info.httpRealm) {
      // assume formSubmitURL === hostname
      info.formSubmitURL = info.hostname;
    }
    // TODO: call logins API
    let added = {
      ...info,
      guid: UUID(),
      timeCreated: Date.now(),
      timePasswordChanged: Date.now(),
    };
    this._all[added.guid] = added;

    added = convertInfo2Item(added);
    recordMetric("added", added.id);

    return added;
  }
  async update(item) {
    const id = item.id;
    if (!id) {
      throw new TypeError("id missing");
    }

    const info = convertItem2Info(item);
    const orig = await this.get(id);
    if (!orig) {
      throw new Error(`no existing item for ${id}`);
    }

    // TODO: call API
    let updated = {
      ...info,
      timePasswordChanged: Date.now(),
    };
    this._all[updated.guid] = updated;

    updated = convertInfo2Item(updated);
    recordMetric("updated", item.id);

    return updated;
  }
  async remove(id) {
    const item = await this.get(id);
    if (item) {
      // TODO: call API
      delete this._all[item.id];

      recordMetric("deleted", item.id);
    }
    return item || null;
  }

}

let bootstrap;
export default async function openDataStore() {
  if (!bootstrap) {
    bootstrap = new DataStore();
  }
  return bootstrap;
}
