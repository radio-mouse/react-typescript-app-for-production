import { loader } from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { resolve } from 'path';

const rules = (isDev: boolean): RuleSetRule[] => [
  { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
  {
    test: /\.(scss|css)$/,
    use: [
      isDev ? 'style-loader' : loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /module\.scss/,
            localIdentName: isDev ? '[path][name]_[local]' : '[hash:base64:8]',
          }
        },
      },
      'sass-loader'
    ]
  },
];

export default rules;
