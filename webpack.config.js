const path = require('path');
const webpack = require('webpack');

const outputPath = path.resolve(__dirname, './www');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: path.resolve(__dirname, './src/index.jsx'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: outputPath,
      filename: 'bundle.js',
    },
    devtool: isProd ? false : 'eval-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
      contentBase: outputPath,
      hot: true,
      proxy: {
        '/api': { target: 'http://localhost:8000' },
      },
      historyApiFallback: {
        index: 'index.html',
      },
    },
  };
};
