const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const shareable = require('./shareable');

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src', 'index.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  ...shareable,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.resolve('dist')
    },
    allowedHosts: 'all',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: /src/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: false
            }
          }
        ],
        include: /src/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
        chunks: ['app'],
        filename: 'index.html',
        template: path.resolve('templates', 'index.html')
      })
  ]
};