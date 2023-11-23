import { EBuildMode } from './models';

const API_BASE = `https://jsonplaceholder.typicode.com`;

export const API_LINK = {
  [EBuildMode.Prod]: API_BASE,
  [EBuildMode.Stage]: API_BASE,
  [EBuildMode.Dev]: API_BASE,
};
