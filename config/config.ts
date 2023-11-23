import { Configuration } from 'webpack';

import { EBuildMode, IBuildOptions } from './models';

import plugins from './plugins';
import resolve from './resolve';
import rules from './rules';
import devServer from './devServer';

const buildConfig = (options: IBuildOptions): Configuration => {
  const { mode, paths } = options;
  const { entry, output, template } = paths;

  const isDev = mode === EBuildMode.Dev;

  return {
    mode: isDev ? EBuildMode.Dev : EBuildMode.Prod,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: plugins(template, mode),
    module: { rules: rules(isDev) },
    resolve: resolve(paths),
    devtool: isDev && 'inline-source-map',
    devServer,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};

export default buildConfig;
