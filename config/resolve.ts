import { ResolveOptions } from 'webpack';
import { IBuildPaths } from './models';

const resolve: (paths: IBuildPaths) => ResolveOptions = (paths) => {
  const { components, pages, constants, assets, helpers, store } = paths;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: { components, pages, constants, assets, helpers, store },
  };
};

export default resolve;
