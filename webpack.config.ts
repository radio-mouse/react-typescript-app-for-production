import { resolve } from 'path';

import buildConfig from './config/build/config';

import { IEnv } from './config/build/models';

const paths = {
  entry: resolve(__dirname, 'src', 'index.tsx'),
  output: resolve(__dirname, 'dist'),
  template: resolve(__dirname, 'public', 'index.html'),
};

export default ({ mode }: IEnv) => buildConfig({ mode, paths });
