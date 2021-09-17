import { rest } from "msw";

import jsonBlog from "./blog.json";
import jsonWorksMain from "./worksMain.json";
import jsonWorksAll from "./worksAll.json";

export const handlers = [
  rest.post("/subscribe", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(
        JSON.stringify({
          message: "OK",
          status: "OK",
        })
      )
    );
  }),

  rest.post("/form", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.body(
        JSON.stringify({
          message: "OK",
          status: "OK",
        })
      )
    );
  }),

  rest.post("/api/blog", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: jsonBlog,
        success: true,
      })
    );
  }),

  rest.get("/api/works/main", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: jsonWorksMain,
        success: true,
      })
    );
  }),

  rest.get("/api/works", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: jsonWorksAll,
        success: true,
      })
    );
  }),
];
