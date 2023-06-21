import { Configuration } from 'webpack-dev-server';

const devServer: Configuration = {
  port: 3000,
  historyApiFallback: true,
};

export default devServer;
