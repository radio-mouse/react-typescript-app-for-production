import { ResolveOptions } from 'webpack';
import { IBuildPaths } from './models';

const resolve: (paths: IBuildPaths) => ResolveOptions = (paths) => {
  const { components, pages } = paths;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: { components, pages },
  };
};

export default resolve;
