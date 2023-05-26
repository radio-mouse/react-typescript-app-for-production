export enum EBuildMode {
  Dev = 'development',
  Prod = 'production',
}

export interface IBuildPaths {
  entry: string;
  output: string;
  template: string;
}

export interface IBuildOptions {
  mode: EBuildMode;
  paths: IBuildPaths;
}

export interface IEnv {
  mode: EBuildMode;
}
