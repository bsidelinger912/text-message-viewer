const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.global\.scss$/,
        // include: __dirname,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[hash:base64]-[name]-[local]',
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './static',
    // noInfo: true, //  --no-info option
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
