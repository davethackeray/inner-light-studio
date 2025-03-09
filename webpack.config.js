const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'components.js',
    library: {
      name: 'VerenaComponents',
      type: 'window',
      export: 'default'
    },
    clean: true
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, 'src/styles')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'components.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devtool: 'source-map'
}
