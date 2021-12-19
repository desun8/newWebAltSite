import { resolve } from "path";
import WindiCSS from "vite-plugin-windicss";
import { posthtmlPlugin } from "vite-plugin-posthtml";
import posthtmlInclude from "posthtml-include";

import posthtmlImgAutosize from "posthtml-img-autosize";
import { posthtmlExternalLink } from "posthtml-external-link";
import rollupVisualizer from "rollup-plugin-visualizer";

const reload = {
  name: "reload",
  handleHotUpdate({ file, server }) {
    const isHTMLComponent =
      file.includes("templates/") && file.endsWith(".html");

    if (isHTMLComponent) {
      server.ws.send({
        type: "full-reload",
        path: "*",
      });
    }
  },
};

export default {
  plugins: [
    posthtmlPlugin({
      plugins: [
        posthtmlInclude({
          root: "src/templates",
        }),

        posthtmlImgAutosize({
          root: "public/",
        }),
        posthtmlExternalLink({
          noreferrer: true,
        }),
      ],
    }),
    WindiCSS(),
    reload,
    rollupVisualizer(),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
  },
};
