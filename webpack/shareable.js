const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'shared': path.resolve('src', 'shared'),
      'pages': path.resolve('src', 'pages'),
      'components': path.resolve('src', 'components'),
      'common': path.resolve('src', 'common'),
      'store': path.resolve('src', 'store.ts')
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js','.ts','.tsx', '.svg']
  }
};