const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  mode: process.env.NODE_ENV,
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
  },
  module: {
    rules: [{
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: 'fonts',
          outputPath: 'fonts',
          name: '[name].[ext]',
          limit: 1000, // make sure this number is big enough to load your resource, or do not define it at all.
        }
      }
    },
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '../img',
            outputPath: 'img',
            name: '[name].[ext]',
            limit: 1000, // make sure this number is big enough to load your resource, or do not define it at all.
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery"
    }),
    // new webpack.SourceMapDevToolPlugin({}),
    new CopyPlugin({
      patterns: [{
        from: "./src/img",
        to: "img"
      }],
      options: {
        concurrency: 100,
      },
    })
  ]
}