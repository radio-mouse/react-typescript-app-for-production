import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const plugins = (template: string): WebpackPluginInstance[]  => [
  new HtmlWebpackPlugin({ template }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
    chunkFilename: "css/[name].[contenthash].css"
  })
];

export default plugins;
