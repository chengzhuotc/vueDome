const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const config = {
  entry: {
    app: './src/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url?limit=8192&name=image/[name].[ext]',
        exclude: [/node_modules/]
      }]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new CommonsChunkPlugin({
      names: ['vendors']
    }),
    new HtmlWebpackPlugin({
      title: 'ddd',
      template: 'src/index.html',
      chunks: ['vendors', 'app'],
      inject: true
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"dev"'
        }
    })
  ]
}
module.exports = config
