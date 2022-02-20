const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const baseConfig = require("./webpack.base.js");
const PUBLIC_URL = process.env.PUBLIC_URL || "./";
console.log(process.env);
const Dotenv = require("dotenv-webpack");

// const fs = require('fs');
// const testFolder = path.resolve(__dirname, 'src/scss/');
// let scssEntryFiles = {}
// fs.readdirSync(testFolder).forEach(file => {
//   if (file.charAt(0) !== "_") {
//     console.log(file);
//     const filename = file.split('.')[0]
//     scssEntryFiles[filename] = path.resolve(__dirname, 'src/scss/', file)
//   }
// });
const port = 8080;

const config = (env) => ({
  target: "web",
  mode: "development",
  // entry: [
  //   "./src/client/index.js",
  //   path.resolve(__dirname, 'src/scss')
  // ],
  entry: {
    'index': "./src/index.js",
    // "app": path.resolve(__dirname, 'src/scss/app.scss')
    // ...scssEntryFiles
  },
  output: {
    path: path.join(__dirname, "./build"),
    publicPath: `http://localhost:${port}/`,
    clean: true,
  },
  devServer: {
    port: port,
    liveReload: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: PUBLIC_URL,
    }),
    new Dotenv({
      path: path.resolve(
        __dirname,
        `.env${env.target !== undefined ? `.${env.target}` : ""}`
      ),
      allowEmptyValues: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      showErrors: true,
      cache: true,
      publicPath: '/',
      favicon: "./public/favicon.ico",
    })
  ],
});

module.exports = (env) => merge(baseConfig, config(env));
