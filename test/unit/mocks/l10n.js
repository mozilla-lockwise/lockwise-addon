/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { mount, mountIntoDOM } from "test/unit/enzyme";
import React from "react";
import { FluentBundle } from "fluent";
import {
  LocalizationProvider, ReactLocalization, isReactLocalization,
} from "fluent-react";

function* generateMessages() {
  const context = new FluentBundle("en-US");
  yield context;
}

export function MockLocalizationProvider(props) {
  return (
    <LocalizationProvider {...props} bundles={generateMessages()}/>
  );
}

export function MockLocalizationContext() {
  return new ReactLocalization(generateMessages());
}

function getMountOptions(options = {}) {
  return {
    context: {
      l10n: MockLocalizationContext(),
    },
    childContextTypes: {
      l10n: isReactLocalization,
    },
    ...options,
  };
}

export default function mountWithL10n(node, options) {
  return mount(node, getMountOptions(options));
}

export function mountWithL10nIntoDOM(node, options) {
  return mountIntoDOM(node, getMountOptions(options));
}
