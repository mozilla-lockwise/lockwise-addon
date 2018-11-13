/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

const PATH = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const JSONTemplater = require("json-templater");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
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

const BABEL_OPTS = (() => {
  let opts = {};

  if (NODE_ENV != "production") {
    opts.retainLines = true;
  }

  return opts;
})();

module.exports = {
  mode: "development",
  context: PATH.resolve(__dirname, "src"),
  entry: {
    "background": "./background/index.js",
    "list/manage": "./list/manage/index.js",
    "list/popup": "./list/popup/index.js",
  },
  devtool: "cheap-source-map",
  output: {
    filename: "[name].js",
    path: PATH.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          (NODE_ENV === "production") ? MiniCSSExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: "dashes",
              importLoaders: 1,
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: BABEL_OPTS,
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "fonts/", to: "fonts/" },
      { from: "icons/", to: "icons/" },
      { from: "images/", to: "images/" },
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
    new HTMLWebpackPlugin({
      template: "template.ejs",
      filename: "list/manage.html",
      chunks: ["list/manage"],
      inject: false,
      icon: "/icons/lb_locked.svg",
    }),
    new HTMLWebpackPlugin({
      template: "template.ejs",
      filename: "list/popup.html",
      chunks: ["list/popup"],
      inject: false,
      icon: "/icons/lb_locked.svg",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV,
    }),
    new MiniCSSExtractPlugin(),
  ],
  resolve: {
    alias: {
      src: PATH.resolve(__dirname, "src"),
      test: PATH.resolve(__dirname, "test"),
    },
  },
};
