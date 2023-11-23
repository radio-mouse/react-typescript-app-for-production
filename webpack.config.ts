import { resolve } from 'path';

import buildConfig from './config/config';

import { IEnv, IBuildPaths } from './config/models';

const paths: IBuildPaths = {
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: resolve(__dirname, 'dist'),
  template: resolve(__dirname, 'public'),
  components: resolve(__dirname, 'src/components'),
  pages: resolve(__dirname, 'src/pages'),
  constants: resolve(__dirname, 'src/constants'),
  assets: resolve(__dirname, 'src/assets'),
  helpers: resolve(__dirname, 'src/helpers'),
  store: resolve(__dirname, 'src/store'),
};

export default ({ mode }: IEnv) => buildConfig({ mode, paths });
