import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { posthtmlPlugin } from "vite-plugin-posthtml";
import posthtmlInclude from "posthtml-include";
import posthtmlImgAutosize from "posthtml-img-autosize";
import { posthtmlExternalLink } from "posthtml-external-link";
import rollupVisualizer from "rollup-plugin-visualizer";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";


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
    {...threeMinifier(), enforce: 'pre'},
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
        inner: resolve(__dirname, "nested/inner.html"),
        contacts: resolve(__dirname, "nested/contacts.html"),
        works: resolve(__dirname, "nested/works.html"),
        project: resolve(__dirname, "nested/project-page.html"),
        about: resolve(__dirname, "nested/about.html"),
      },
    },
  },
};
