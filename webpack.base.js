module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
