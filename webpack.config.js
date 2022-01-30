const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/javascript/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options:{
          minimize: true,
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "img",
            }
          },
        ],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
    filename: "index.html",
  })],



};
