import { ProgressPlugin, WebpackPluginInstance } from "webpack";

import HtmlWebpackPlugin from "html-webpack-plugin";

const plugins = (template: string): WebpackPluginInstance[]  => [
  new HtmlWebpackPlugin({ template }),
  new ProgressPlugin(),
];

export default plugins;
