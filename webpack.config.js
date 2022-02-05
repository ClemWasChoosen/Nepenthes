const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //Mode developpement
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),

  //Pour le debug, permet de spécifier le bon endroit quand
  //il y a une erreur dans le terminal
  devtool: 'inline-source-map',

  //Pour le serveur de reload
  devServer: {
   static: './dist',
  },

  plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, './src/index.html'),
      }),
    ],

  //Output du fichier
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  //Modules ajoutés pour gérer les autres fichiers
  module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
   ],
 },
};
