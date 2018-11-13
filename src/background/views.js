/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class SingletonView {
  constructor(path) {
    this.path = path;
    this.id = undefined;
  }

  async open() {
    let windowId,
        offPath = false,
        url = browser.extension.getURL(this.path);
    if (this.id !== undefined) {
      // verify tab still exists
      try {
        let tabInfo = await browser.tabs.get(this.id);
        windowId = tabInfo.windowId;
        offPath = !tabInfo.url.startsWith(url);
      } catch (err) {
        // does not exist, forget existing info
        this.id = undefined;
      }
    }

    if (!offPath && this.id !== undefined) {
      // focus owning window and activate tab
      await browser.windows.update(windowId, {
        focused: true,
      });
      await browser.tabs.update(this.id, {
        active: true,
      });
    } else {
      // create a tab in the current window
      let tabInfo = await browser.tabs.create({
        url,
      });
      this.id = tabInfo.id;
    }
    return this;
  }

  async close() {
    try {
      (this.id !== undefined) && await browser.tabs.remove(this.id);
    } catch (err) {
      // Q: loggit?
      // eslint-disable-next-line no-console
      console.error(`could not close ${this.path} view: ${err.message}`);
    }
    this.id = undefined;
    return this;
  }
}

const views = {
  manage: new SingletonView("/list/manage.html"),
};

export async function openView(name) {
  const v = views[name];
  return v.open();
}

export async function closeView(name) {
  if (!name) {
    let pending = Object.keys(views).map((n) => views[n].close());
    await Promise.all(pending);
    return {};
  }
  const v = views[name];
  return v.close();
}
