import { Configuration } from "webpack";

import { EBuildMode, IBuildOptions } from "./models";

import plugins from "./plugins";
import resolve from "./resolve";
import rules from "./rules";
import devServer from "./devServer";

const buildConfig = (options: IBuildOptions): Configuration => {
  const { mode, paths } = options;
  const { entry, output, template } = paths;

  const isDev = mode === EBuildMode.Dev;

  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: plugins(template),
    module: { rules: rules(isDev) },
    resolve,
    devtool: isDev && 'inline-source-map',
    devServer,
  };
};

export default buildConfig;
