// Core
const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');
// Css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackInjector = require('html-webpack-injector');
// Sprites
const SpritesmithPlugin = require('webpack-spritesmith');
// Copy
const CopyPlugin = require('copy-webpack-plugin');


// const SpritePlugin = require('svg-sprite-loader/plugin');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    const isIndex = name === 'index';
    return new HtmlWebpackPlugin({
      title: 'keke',
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      chunks: ['core', isIndex ? 'home' : name],
      inject: true,
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/html/view');


module.exports = {
  entry: {
    core: './src/js/root.js',
    home: './src/js/home.js',
    // ['style-core']: './src/styles/root.scss',
    // ['style-home']: './src/styles/home.scss'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    // filename: '[name].bundle.js'
    filename: '[name].js'
  },

  devServer: {
    contentBase: './dist',
  },

  devtool: 'source-map',

  module: {
    rules: [
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
        test: /\.scss$/,
        // include: path.resolve(__dirname, 'src/'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },

      //fonts
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader',
      //   ],
      // },

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

      // svg sprites
      // {
      //   test: /\.svg$/,
      //   // include: [
      //   //   path.resolve(__dirname, 'src/images/sprites-svg')
      //   // ],
      //   use: [
      //     {
      //       loader: 'svg-sprite-loader',
      //       options: {
      //         extract: true,
      //         publicPath: '/static/',
      //       },
      //     },
      //     'svgo-loader',
      //   ],
      // },

      // Sprites
      // {
      //   test: /\.png$/,
      //   use: [
      //     'file-loader?name=images/[name].[ext]',
      //   ],
      // },
    ],
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    // }),

    // new SpritesmithPlugin({
    //   src: {
    //     cwd: path.resolve(__dirname, 'src/images/sprites'),
    //     glob: '*.png',
    //   },
    //   target: {
    //     image: path.resolve(__dirname, 'src/images/sprite.png'),
    //     css: path.resolve(__dirname, 'src/style/lib/sprite.css'),
    //   },
    //   apiOptions: {
    //     cssImageRef: './images/sprite.png',
    //   },
    // }),

    // new SpritePlugin(),

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