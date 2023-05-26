import { resolve } from 'path';

import buildConfig from './config/build/config';

import { EBuildMode } from './config/build/models';

const paths = {
  entry: resolve(__dirname, 'src', 'index.ts'),
  output: resolve(__dirname, 'dist'),
  template: resolve(__dirname, 'public', 'index.html'),
};

const config = buildConfig({ mode: EBuildMode.Dev, paths });

export default config;
