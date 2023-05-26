import { Configuration } from "webpack";

import { EBuildMode, IBuildOptions } from "./models";

import plugins from "./plugins";
import resolve from "./resolve";
import rules from "./rules";
import devServer from "./devServer";

const buildConfig = (options: IBuildOptions): Configuration => {
  const { mode, paths } = options;
  const { entry, output, template } = paths;

  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: plugins(template),
    module: { rules },
    resolve,
    devtool: mode === EBuildMode.Dev && 'inline-source-map',
    devServer,
  };
};

export default buildConfig;
