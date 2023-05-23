import { ProgressPlugin, Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { resolve } from 'path';

const config: Configuration = {
  mode: 'development',
  entry: resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'public', 'index.html') }),
    new ProgressPlugin(),
  ],
  module: {
    rules: [
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};

export default config;