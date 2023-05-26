import { RuleSetRule } from "webpack";

const rules: RuleSetRule[] = [
  { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
];

export default rules;
