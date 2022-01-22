const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    open: true,

    hot: true,
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'public')
    }
  },

  plugins: [new HotModuleReplacementPlugin()]
});
