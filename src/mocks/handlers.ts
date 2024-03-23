import { http } from 'msw';

import type { Recipe } from '@/types/Recipe';

export const handlers = [
  http.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    () => {
      return new Response(JSON.stringify([1, 2, 3, 4, 5]));
    },
  ),
  http.get('/api/recipes', () => {
    const recipes = [
      { id: 1, title: 'apple cake' },
      { id: 2, title: 'pork saute' },
      { id: 3, title: 'honey toast' },
    ] satisfies Recipe[];

    return new Response(JSON.stringify({ recipes }));
  }),
];
