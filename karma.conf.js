/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

module.exports = (config) => {
  config.set({
    browsers: ["FirefoxHeadless"],
    customLaunchers: {
      FirefoxHeadless: {
        base: "Firefox",
        flags: ["-headless"],
      },
    },
    files: [
      "test/unit/**/*-test.js",
    ],
    preprocessors: {
      "**/*.js": ["webpack", "sourcemap"],
    },

    frameworks: ["mocha"],
    reporters: ["mocha", "coverage"],
    coverageReporter: {
      dir: "coverage/",
      reporters: [
        { type: "text" },
        { type: "lcov" },
        { type: "html", subdir: "html" },
      ],
    },
    mochaReporter: {
      showDiff: true,
    },

    webpack: require("./webpack.config"),
    webpackMiddleware: {
      stats: "errors-only",
    },
  });
};
