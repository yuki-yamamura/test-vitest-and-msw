import { http } from 'msw';

export const handlers = [
  http.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    () => {
      return new Response(JSON.stringify([1, 2, 3, 4, 5]));
    },
  ),
];
