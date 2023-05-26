import { loader } from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";

const rules = (isDev: boolean): RuleSetRule[] => [
  { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
  { test: /\.(scss|css)$/, use: [isDev ? 'style-loader' : loader, 'css-loader', 'sass-loader'] },
];

export default rules;
