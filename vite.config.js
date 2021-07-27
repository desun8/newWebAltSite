import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { posthtmlPlugin } from "vite-plugin-posthtml";
import posthtmlInclude from "posthtml-include";
import rollupVisualizer from 'rollup-plugin-visualizer';

// const handleHotUpdate = ({ server }) => {
//   server.ws.send({
//     type: 'custom',
//     event: 'special-update',
//     data: {}
//   })
//   return []
// }

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
      /* config */
      plugins: [
        posthtmlInclude({
          root: "src/templates",
        }),
      ],
    }),
    WindiCSS(),
    vue(),
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
        services: resolve(__dirname, "nested/services.html"),
        blog: resolve(__dirname, "nested/blog.html"),
        form: resolve(__dirname, "nested/form.html"),
      },
    },
  },
};
