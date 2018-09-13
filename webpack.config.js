module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  
  watchOptions: {
    poll: true
  }

//   devServer: {
//     historyApiFallback: true,
//     noInfo: true
//   },
//   performance: {
//     hints: false
//   },
//   devtool: '#eval-source-map'
}

// test specific setups
if (process.env.NODE_ENV === 'test') {
  module.exports.externals = [require('webpack-node-externals')()]
  module.exports.devtool = 'eval'
}
