const { resolve } = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const srcPath = resolve(__dirname, 'src');
const distPath = resolve(__dirname, 'dist');
const dotEnvPath = resolve(__dirname, '.env');
const publicPath = '';

module.exports = {
  entry: [
    require.resolve('whatwg-fetch'),
    require.resolve('object-assign'),
    resolve(srcPath, 'index.js'),
  ],

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: distPath,
    publicPath,
  },

  context: srcPath,

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: require.resolve('html-loader'),
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, 
        loader: require.resolve('url-loader'),
        options: {
          limit: 100000,
        },
      },
      {
        test: /\\.(ttf|woff2|woff|eot|svg)$/,
        loader: require.resolve('file-loader'),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                camelCase: true,
                sourceMap: true,
                importLoaders: 2,
                minimize: true,
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                sourceMap: true,
              },
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [
      srcPath,
      resolve(__dirname, 'node_modules'),
    ],
  },

  plugins: [
    new CleanPlugin([
      distPath,
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Dotenv({
      path: dotEnvPath,
    }),
    new HtmlWebpackPlugin({
      template: resolve(srcPath, 'index.html'),
      xhtml: true,
      hash: true,
      inject: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      },
    }),
  ],
};
