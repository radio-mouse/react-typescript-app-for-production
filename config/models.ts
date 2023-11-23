export enum EBuildMode {
  Dev = 'development',
  Prod = 'production',
  Stage = 'staging',
}

export interface IBuildPaths {
  entry: string;
  output: string;
  template: string;
  components: string;
  pages: string;
  constants: string;
  assets: string;
  helpers: string;
  store: string;
}

export interface IBuildOptions {
  mode: EBuildMode;
  paths: IBuildPaths;
}

export interface IEnv {
  mode: EBuildMode;
}
