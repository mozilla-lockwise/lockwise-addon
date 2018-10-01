/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

 let extraPlugins = [];
if (process.env.STRICT_LINT !== "1") {
  extraPlugins.push("only-warn");
}

module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "extends": [
    "eslint:recommended",
    "plugin:mozilla/recommended",
    "plugin:react/recommended",
  ],
  "env": {
    "browser": true,
    "node": true,
    "webextensions": true,
    "es6": true,
  },
  "plugins": [
    "mozilla",
    "react",
    ...extraPlugins,
  ],
  "rules": {
    "comma-dangle": ["error", "always-multiline"],
    "curly": "error",
    "no-console": "warn",
    "semi": "error",
  },
};
