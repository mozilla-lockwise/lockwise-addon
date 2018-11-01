/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import waitUntil from "async-wait-until";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import chaiEnzyme from "chai-enzyme";
import fetchMock from "fetch-mock";
import { Localized } from "fluent-react";
import React from "react";
import sinon from "sinon";

import { mount } from "test/unit/enzyme";
import AppLocalizationProvider from "src/l10n";

chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

describe("<AppLocalizationProvider/>", () => {
  const locales = ["en-US", "es-ES"];
  const bundles = ["greetings", "farewells"];
  function waitUntilTranslated() {
    return waitUntil(() => {
      return AppLocalizationProvider.prototype.render.callCount === 2;
    });
  }

  before(() => {
    fetchMock.get("/locales/en-US/greetings.ftl", "hello = Hello\n");
    fetchMock.get("/locales/en-US/farewells.ftl", "goodbye = Goodbye\n");
    fetchMock.get("/locales/es-ES/greetings.ftl", "hello = Hola\n");
    fetchMock.get("/locales/locales.json", JSON.stringify(locales));
    fetchMock.get("/bad-locales/locales.json", JSON.stringify(locales));
    fetchMock.get("*", {throws: new Error()});
  });

  after(() => {
    fetchMock.restore();
  });

  beforeEach(() => {
    sinon.spy(AppLocalizationProvider.prototype, "render");
  });

  afterEach(() => {
    AppLocalizationProvider.prototype.render.restore();
  });

  it("translate to en-US", async () => {
    const wrapper = mount(
      <AppLocalizationProvider bundles={bundles}
                               userLocales={["en-US"]}>
        <main>
          <Localized id="hello">
            <div>untranslated</div>
          </Localized>
          <Localized id="goodbye">
            <div>untranslated</div>
          </Localized>
        </main>
      </AppLocalizationProvider>
    );
    await waitUntilTranslated();

    expect(wrapper).to.have.text("HelloGoodbye");
  });

  it("translate to es-ES", async () => {
    const wrapper = mount(
      <AppLocalizationProvider bundles={bundles}
                               userLocales={["es-ES"]}>
        <main>
          <Localized id="hello">
            <div>untranslated</div>
          </Localized>
          <Localized id="goodbye">
            <div>untranslated</div>
          </Localized>
        </main>
      </AppLocalizationProvider>
    );
    await waitUntilTranslated();

    // Ensure we fall back to en-US if our locale is missing that string.
    expect(wrapper).to.have.text("HolaGoodbye");
  });

  it("translate to de", async () => {
    const wrapper = mount(
      <AppLocalizationProvider bundles={bundles}
                               userLocales={["de"]}>
        <main>
          <Localized id="hello">
            <div>untranslated</div>
          </Localized>
          <Localized id="goodbye">
            <div>untranslated</div>
          </Localized>
        </main>
      </AppLocalizationProvider>
    );
    await waitUntilTranslated();

    // Ensure we fall back to en-US strings if we don't have translations for
    // any of the userLocales.
    expect(wrapper).to.have.text("HelloGoodbye");
  });

  it("fallback to text content", async () => {
    const wrapper = mount(
      <AppLocalizationProvider bundles={bundles}
                               userLocales={locales}>
        <Localized id="nonexistent">
          <div>untranslated</div>
        </Localized>
      </AppLocalizationProvider>
    );
    await waitUntilTranslated();
    expect(wrapper).to.have.text("untranslated");
  });

  it("throws when locales.json is not found", () => {
    const provider = new AppLocalizationProvider({
      bundles, baseDir: "/nonexist",
    });
    return expect(provider.componentDidMount()).to.be.rejectedWith(
      Error, "unable to fetch available locales"
    );
  });
});
