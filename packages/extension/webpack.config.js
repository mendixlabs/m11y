const path = require('path');
const fs = require('fs');
const { camelCase } = require('lodash');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ProgressBar = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pkgJson = require('./package.json');

const ifDirIsNotEmpty = (dir, value) => {
  return fs.readdirSync(dir).length !== 0 ? value : undefined;
};

const ifDirExists = (SrcPath, value) => {
  return fs.existsSync(path.join(__dirname, 'src', SrcPath))
    ? value
    : undefined;
};

module.exports = (env) => {
  const { ifProd, ifDev } = getIfUtils(env);

  const getFolders = (dirPath) => {
    return fs
      .readdirSync(path.join(__dirname, 'src', dirPath), {
        withFileTypes: true,
      })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  };

  const getEntries = (dirPath, entryFile = 'index.tsx') => {
    const _e = {};
    const folders = getFolders(dirPath);

    folders.forEach((folderName) => {
      _e[camelCase(folderName)] = path.join(
        __dirname,
        'src',
        dirPath,
        folderName,
        entryFile
      );
    });

    return _e;
  };

  return {
    mode: ifProd('production', 'development'),
    entry: removeEmpty({
      popup: ifDirExists('popup', path.join(__dirname, 'src/popup/popup.tsx')),
      devtools: ifDirExists(
        'devtools',
        path.join(__dirname, 'src/devtools/devtools.ts')
      ),
      options: ifDirExists('options', './src/options/options.tsx'),
      panel: ifDirExists('panel', './src/panel/panel.tsx'),
      serviceworker: ifDirExists('background/background.ts', {
        import: './src/background/background.ts',
        filename: 'js/background.js',
      }),
      ...getEntries('scripts', 'index.ts'),
    }),
    output: {
      path: path.resolve(__dirname, 'm11y_build'),
      filename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
              plugins: removeEmpty([ifDev('react-refresh/babel')]),
            },
          },
          exclude: /node_modules/,
          include: [path.resolve(__dirname, 'src')],
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: removeEmpty([
            ifProd(MiniCssExtractPlugin.loader, 'style-loader'),
            'css-loader',
            'sass-loader',
          ]),
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },
      ],
    },
    plugins: removeEmpty([
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false, // don't remove index.html when using the flag watch
      }),
      ifProd(
        new MiniCssExtractPlugin({
          filename: 'css/[name].css',
        })
      ),
      ifDirExists(
        'popup',
        new HtmlWebpackPlugin({
          filename: 'popup.html',
          template: 'src/popup/index.html',
          chunks: ['popup'],
        })
      ),
      ifDirExists(
        'panel',
        new HtmlWebpackPlugin({
          filename: 'panel.html',
          template: 'src/panel/index.html',
          chunks: ['panel'],
        })
      ),
      ifDirExists(
        'devtools',
        new HtmlWebpackPlugin({
          filename: 'devtools.html',
          template: 'src/devtools/index.html',
          chunks: ['devtools'],
        })
      ),
      ifDirExists(
        'options',
        new HtmlWebpackPlugin({
          filename: 'options.html',
          template: 'src/options/index.html',
          chunks: ['options'],
        })
      ),
      new CopyPlugin({
        patterns: removeEmpty([
          ifDirIsNotEmpty(path.join(__dirname, 'public', 'icons'), {
            from: 'public/icons',
            to: 'icons',
          }),
          ifDirIsNotEmpty(path.join(__dirname, 'public'), {
            from: 'public/mx-bp-a11y-extension.css',
            to: '',
          }),
          {
            from: 'public/manifest.json',
            transform: (buffer) => {
              const manifestJson = JSON.parse(buffer.toString());
              manifestJson.name = pkgJson.name;
              manifestJson.version = pkgJson.version;
              manifestJson.description = pkgJson.description;
              manifestJson.author = pkgJson.author;
              // @ts-ignore
              manifestJson.homepage_url = pkgJson.homepage; // TODO: check this
              return Buffer.from(JSON.stringify(manifestJson));
            },
          },
        ]),
      }),

      ifDev(new ReactRefreshWebpackPlugin()),
      ifProd(new ProgressBar()),
    ]),
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devtool: ifProd(false, 'source-map'),
    // devtool: 'cheap-module-source-map',
    devServer: {
      port: 3003,
      host: 'localhost',
      open: true,
      compress: true,
      overlay: true,
      static: path.join(__dirname, 'public'),
    },
  };
};
