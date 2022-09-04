import glob from 'glob';
import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: glob.sync('./src/**.js').reduce((obj, el) => {
    obj[path.parse(el).name] = el;
    return obj;
  }, {}),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|mp3)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  stats: 'minimal',
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    open: false,
    contentBase: './dist',
    inline: true,
    port: 4000,
  },
};
