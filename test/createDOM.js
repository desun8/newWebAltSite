import jsdom from "jsdom";

export const createDOM = () => {
  const dom = new jsdom.JSDOM(`
  <html>
    <body id="root">
    </body>
  </html>
`);

  global.window = dom.window;
  global.document = dom.window.document;
};
