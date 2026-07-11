const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head><title>Sistema Biblioteca</title></head>
          <body>
            <div id="root"></div>
            <script src="bundle.js"></script>
          </body>
        </html>
      `
    }),
    new Dotenv({
      path: "./.env.local" // aquí cargas tu entorno
    }),
    new webpack.DefinePlugin({
      "process.env.PLATFORM": JSON.stringify(process.env.PLATFORM)
    })
  ],
  devServer: {
    open: true,
    port: 8000
  },
  mode: "development"
};
