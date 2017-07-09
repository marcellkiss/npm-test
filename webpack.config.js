module.exports = {
  entry: ['./index.js'],

  output: {
    filename: 'js/bundle.js',
    path: './dist',
    publicPath: "./dist",
  },

  externals: {
    "jquery": "jQuery"
  },
  module: {
    loaders: [
    ]
  }
};