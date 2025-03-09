const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // Using development for better debugging
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'components.js',
    library: {
      name: 'VerenaComponents',
      type: 'umd',
      export: 'default'
    }
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { browsers: ['>0.25%', 'not dead'] } }],
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
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
              implementation: require('sass'),
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, '_sass'),
                  path.resolve(__dirname, '_sass/global'),
                  path.resolve(__dirname, '_sass/layouts'),
                  path.resolve(__dirname, '_sass/components')
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
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.BannerPlugin({
      banner: 'VerenaComponents Debug Build'
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, '_sass')
    }
  }
};
