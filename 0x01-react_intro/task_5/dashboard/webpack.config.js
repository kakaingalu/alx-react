const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'), // the bundle output path
    filename: 'bundle.js', // the name of the bundle
  },
  devtool: 'inline-source-map', // to debug the code
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html', // to import index.html file inside index.js
    }),
  ],
  performance: {
    maxAssetSize: 1000000,
    hints: false,
    maxEntrypointSize: 1000000,
  },
  devServer: {
    port: 3000, // you can change the port
    hot: true, // to hot reload
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
};
