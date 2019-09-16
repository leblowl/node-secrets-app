const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/client/js'),
    publicPath: '/js/',
    filename: 'app.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src/client/js'),
      'node_modules'
    ]
  }
};
