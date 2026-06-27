const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const webMode = {
  name: "WebConfig",
  entry: "./src/index.ts",
  target: "web",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/web")
  },
  externals: {
    "prompt-sync": "{}"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new Dotenv({
      path: "./.env.local"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/web")
    },
    open: true,
    // port: 8000
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

const terminalMode = {
  name: "TerminalConfig",
  entry: "./src/index.ts",
  target: "node",
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/terminal")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = [webMode, terminalMode];


// module.exports = {
//   entry: "./src/web.ts",

//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist")
//   },

//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         exclude: /node_modules/
//       }
//     ]
//   },

//   resolve: {
//     extensions: [".ts", ".js"]
//   },

//   devServer: {
//     static: {
//       directory: path.join(__dirname, "src")
//     },
//     open: true,
//     port: 8000
//   }
// };