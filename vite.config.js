// const { resolve } = require('path');
// const vue = require('@vitejs/plugin-vue');
// const { posthtmlPlugin } = require('vite-plugin-posthtml');
// const posthtmlInclude = require('posthtml-include');

import {resolve} from "path";
import vue from "@vitejs/plugin-vue"
import { posthtmlPlugin } from "vite-plugin-posthtml"
import posthtmlInclude from "posthtml-include";


export default {
  plugins: [
    posthtmlPlugin({
      /* config */
      plugins: [
        posthtmlInclude({
          root: 'src/templates',
        })],
    }),
    vue(),
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'nested/services.html'),
        blog: resolve(__dirname, 'nested/blog.html')
      }
    }
  }
};
