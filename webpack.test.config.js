const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const defaultWebpackConfig = require('./webpack.config');

const terraApplicationConfig = (env = {}) => ({
  entry: {
    index: './test-harness/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      lang: env.defaultLocale || 'en',
      filename: 'index.html',
      template: './test-harness/index.html',
      rootElementId: 'root',
    }),
    new DefinePlugin({
      TERRA_APPLICATION_LOCALE: JSON.stringify(env.defaultLocale || 'en'),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'test-harness/AppConfig.json', to: 'config/AppConfig.json' },
      ],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

module.exports = mergedConfig;
