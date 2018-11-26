/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import "geckodriver";

import PATH from "path";
import WebExtUtil from "web-ext";
import webdriver from "selenium-webdriver";
import firefox from "selenium-webdriver/firefox";

const DEFAULT_PREFS = {
  "xpinstall.signatures.required": false,
  "devtools.chrome.enabled": true,
  "devtools.debugger.remote-enabled": true,
};

export class WebExtensionDriver {
  constructor(manifest, opts) {
    this.manifest = manifest;
    this.options = { ...opts };
  }

  async initialize() {
    if (this.webext) {
      return this.webext;
    }

    const sourceDir = PATH.dirname(this.manifest);
    const artifactsDir = PATH.resolve(sourceDir, "../addons");
    const info = await WebExtUtil.cmd.build({
      sourceDir,
      artifactsDir,
      overwriteDest: true,
    });

    this.webext = info;

    return this;
  }

  get running() { return !!(this.webext && this.webext.id); }
  get firefox() { return firefox; }
  get webdriver() { return webdriver; }

  get driver() { return this.webext && this.webext.driver; }
  get id() { return this.webext && this.webext.id; }

  url(path) {
    if (!this.running) {
      return "";
    }
    if (!path) {
      path = "";
    }

    return `${this.webext.baseURL}${path}`;
  }

  async inContent() {
    if (this.running) {
      const driver = this.driver;
      await driver.setContext(this.firefox.Context.CONTENT);
    }
  }
  async inChrome() {
    if (this.running) {
      const driver = this.driver;
      await driver.setContext(this.firefox.Context.CHROME);
    }
  }

  async start() {
    if (this.running) {
      return this;
    }

    // build the driver driver
    let fxOpts = new firefox.Options();

    let fxPrefs = this.options.preferences || {};
    fxPrefs = {
      ...fxPrefs,
      ...DEFAULT_PREFS,
    };
    Object.entries(fxPrefs).forEach((e) => {
      const [key, value] = e;
      fxOpts.setPreference(key, value);
    });

    const driver = new webdriver.Builder().
      forBrowser("firefox").
      setFirefoxOptions(fxOpts).
      build();

    // load web-ext
    const webext = this.webext;
    await driver.setContext(firefox.Context.CHROME);
    webext.id = await driver.installAddon(webext.extensionPath);
    webext.hostname = await driver.executeScript(`
      const Cu = Components.utils;
      const Services = ChromeUtils.import("resource://gre/modules/Services.jsm");
      const { WebExtensionPolicy } = Cu.getGlobalForObject(Services);
      return WebExtensionPolicy.getByID("${webext.id}").mozExtensionHostname;
    `);
    webext.baseURL = `moz-extension://${webext.hostname}`;
    await driver.setContext(firefox.Context.CONTENT);
    webext.driver = driver;

    return this;
  }

  async stop() {
    if (!this.running) {
      return this;
    }
    const webext = this.webext;
    const driver = webext.driver;

    await driver.quit();
    delete webext.id;
    delete webext.hostname;
    delete webext.baseURL;
    delete webext.driver;

    return this;
  }
}

let _webext;
export default async function prepare() {
  if (!_webext) {
    const manifest = PATH.resolve(__dirname, "../../dist/manifest.json");
    const opts = {};
    const webext = new WebExtensionDriver(manifest, opts);
    _webext = await webext.initialize();
  }

  return _webext;
}
