import { resolve } from 'path';

import buildConfig from './config/config';

import { IEnv, IBuildPaths } from './config/models';

const paths: IBuildPaths = {
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: resolve(__dirname, 'dist'),
  template: resolve(__dirname, 'public', 'index.html'),
  components: resolve(__dirname, 'src/components'),
  pages: resolve(__dirname, 'src/pages'),
};

export default ({ mode }: IEnv) => buildConfig({ mode, paths });
