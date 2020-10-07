// Core
const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
// Css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Sprites
const SpritesmithPlugin = require('webpack-spritesmith');
// Copy
const CopyPlugin = require('copy-webpack-plugin');
// Vue
const { VueLoaderPlugin } = require('vue-loader');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    const isIndex = name === 'index';
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      chunks: ['core', isIndex ? 'home' : name],
      inject: true,
      scriptLoading: 'defer',
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/html/view');


module.exports = {
  entry: {
    core: './src/js/root.js',
    home: './src/js/home.js',
    blog: ['regenerator-runtime', './src/js/blog.js'],
    services: './src/js/services.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  devServer: {
    host: '192.168.1.196',
    contentBase: './dist',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },

      // Disabled AMD syntax
      // fix problem with scrollMagic plugins
      // { test: /\.js$/, loader: 'imports-loader?define=>false' },

      // css
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          // 'postcss-loader',
          // 'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-100vh-fix'),
                require('postcss-100vh-fix'),
                require('postcss-hover-media-feature'),
                require('postcss-preset-env')({ stage: 1 }),
              ]
            }
          },
          'sass-loader',
        ],
      },

      //fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          }
        ],
      },

      // imgMin
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 80,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                // quality: '75-90',
                quality: [0.75, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),

    new CopyPlugin({
      patterns: [
        { from: './src/fonts', to: './fonts' },
        { from: './src/images', to: './images' },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    ...htmlPlugins,
  ],
};