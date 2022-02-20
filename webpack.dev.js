const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.js");
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

const config = {
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
    filename: "js/[name].js",
    publicPath: `http://localhost:${port}`,
    clean: true,
  },
  devServer: {
    port: port,
    liveReload: true,
    // static: {
    //   directory: path.resolve(__dirname, "./static"),
    // },
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
};

module.exports = merge(baseConfig, config);
