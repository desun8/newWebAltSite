import { rest } from 'msw';

// import jsonData from './data.json';

export const handlers = [
  rest.post('/subscribe', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body(JSON.stringify({
        message: 'OK'
      }))
    );
  }),

  rest.post('/form', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.body(
        JSON.stringify({
          message: 'OK',
        })
      )
    );
  }),
];
