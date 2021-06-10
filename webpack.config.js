const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const terraApplicationConfig = () => ({
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'terra_content_package_template',
      filename: 'remoteEntry.js',
      exposes: {
        './PageExample': './src/pages/PageExample',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        '@cerner/terra-application': {
          singleton: true,
          version: '2.0',
          requiredVersion: '^2',
        },
        '@cerner/terra-application/': {
          singleton: true,
          version: '2.0',
          requiredVersion: '^2',
        },
        'react-router-dom': {
          singleton: true,
        },
        'react-intl': {
          singleton: true,
          requiredVersion: '^5.0.0',
        },
      },
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

module.exports = mergedConfig;
