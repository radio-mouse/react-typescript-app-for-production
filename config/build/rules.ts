import { RuleSetRule } from "webpack";

const rules: RuleSetRule[] = [
  { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
  { test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
];

export default rules;
