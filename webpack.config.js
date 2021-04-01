const path = require("path");
// import path from 'path'
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader",
  },
  {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  },
  {
    loader: "react-svg-loader",
    option: {
      jsx: true,
    },
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      "file-loader",
      {
        loader: "image-webpack-loader",
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true, // webpack@2.x and newer
        },
      },
    ],
  },
  {
    test: /\.scss$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "./css/[name].css",
        },
      },
      {
        loader: "sass-loader",
      },

      //"style-loader", // creates style nodes from JS strings
      //"css-loader", // translates CSS into CommonJS
      //"sass-loader" // compiles Sass to CSS, using Node Sass by default
    ],
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 30,
    poll: 1000,
    ignored: ["/node_modules/"],
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./",
    port: 3000,
  },
};
