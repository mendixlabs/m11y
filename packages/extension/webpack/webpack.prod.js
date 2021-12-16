const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const WebpackCrx = require('webpack-crx');

const srcDir = path.join(__dirname, '..');

const CRX = {
  plugins: [
    new WebpackCrx({
      src: path.join(srcDir, 'm11y'),
      dest: path.join(srcDir, 'build'),
      name: 'M11Extension',
    }),
  ],
};

module.exports = merge(
  common,
  {
    mode: 'production',
  },
  CRX
);
