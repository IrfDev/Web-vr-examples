const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: path.join(__dirname, 'src', 'index'),

  // Where webpack outputs the assets and bundles

  // Customize the webpack build process
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // output
      template: path.join(__dirname, './', 'template.html')
    })
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      {
        test: /\.(scss|css)$/,

        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' }
    ]
  }
};
