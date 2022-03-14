const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const srcDir = path.join(__dirname, '..', 'src');

module.exports = {
  entry: {
    popup: path.join(srcDir, '/popup/popup.tsx'),
    panel: path.join(srcDir, '/panel/panel.tsx'),
    options: path.join(srcDir, '/options/options.tsx'),
    devtools: path.join(srcDir, '/devtools/devtools.ts'),
    background: path.join(srcDir, '/background/background.ts'),
    content_script: path.join(srcDir, '/content_script/content_script.tsx'),
    inject: path.join(srcDir, 'inject/inject.ts'),
  },
  output: {
    path: path.join(__dirname, '../m11y/js'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {},
    }),
  ],
};
