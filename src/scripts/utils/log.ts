// enum Theme {
//   Default = "default",
//   Warn = "warn",
//   Error = "error",
// }

type Style = {
  padding?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  fontWeight?: string;
};

const toString = (obj: Object) =>
  Object.entries(obj)
    .map(([k, v]) => `${k}: ${v}`)
    .join("; ");

const styleConstructor = (styles: Style) => {
  const style = {
    padding: styles.padding ? styles.padding : "1em",
    color: styles.color ? styles.color : "inherit",
    background: styles.background ? styles.background : "inherit",
    "font-size": styles.fontSize ? styles.fontSize : "inherit",
    "font-weight": styles.fontWeight ? styles.fontWeight : "inherit",
  };

  return toString(style);
};

const logMaker = (msg: string, style: string) => {
  console.log("%c%s", style, msg);
};

export const log = (msg: string, theme = "default") => {
  switch (theme) {
    default:
      logMaker(msg, styleConstructor({ background: "cornflowerblue" }));
  }
};
