const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.tsx',
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(js|jsx|ts|tsx)$/, use: 'babel-loader' },
      {
        test: /\.css/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-modules-typescript-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new StylelintPlugin(),
  ].concat(isProd ? [new MiniCssExtractPlugin()] : []),
};
