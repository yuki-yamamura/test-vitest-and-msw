import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    (req, res, ctx) => {
      return res(ctx.json([1, 2, 3, 4, 5]));
    },
  ),
];
