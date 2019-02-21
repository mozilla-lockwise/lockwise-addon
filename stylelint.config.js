/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const defaultSeverity = (process.env.STRICT_LINT !== "1") ? "warning" : "error";

module.exports = {
  defaultSeverity,
  extends: "stylelint-config-recommended",
  rules: {
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "property-no-unknown": [true, {
      "ignoreProperties": ["composes"],
    }],
  },
};
