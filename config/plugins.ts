import { EnvironmentPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { EBuildMode } from './models';
import { API_LINK } from './constants';

const plugins = (template: string, mode: EBuildMode): WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: `${template}/index.html`,
    favicon: `${template}/${mode}-icon.ico`,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new EnvironmentPlugin({ MODE: mode, API_LINK: API_LINK[mode] }),
];

export default plugins;
