/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const PATH = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const JSONTemplater = require("json-templater");
const webpack = require("webpack");

const pkg = require("./package.json");
const NODE_ENV = (() => {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV.toLowerCase();
  } else if (process.env.NODE_SUGGESTED_ENV) {
    return process.env.NODE_SUGGESTED_ENV.toLowerCase();
  }
  return "development";
})();

module.exports = {
  mode: "development",
  context: PATH.resolve(__dirname, "src"),
  entry: {
    "background": "./background/index.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: PATH.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: "babel-loader",
    }],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "fonts/", to: "fonts/" },
      { from: "icons/", to: "icons/" },
      { from: "locales/", to: "locales/" },
    ], {
      ignore: ["README*"],
    }),
    new CopyWebpackPlugin([
      {
        from: "manifest.json.tpl",
        to: "manifest.json",
        transform: (content, path) => {
          content = JSON.parse(content);
          content = JSONTemplater.object(content, pkg);
          content = JSON.stringify(content, null, "  ");
          return content;
        },
      },
    ]),
    new webpack.EnvironmentPlugin({
      NODE_ENV,
    }),
  ],
};
