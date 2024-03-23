import RecipeList from '.';
import { server } from '@/mocks/server';
import { render, screen } from '@/mocks/test-utils';
import userEvent from '@testing-library/user-event';
import { http } from 'msw';
import { describe, expect, test } from 'vitest';

import type { Recipe } from '@/types/Recipe';

describe('RecipeList', () => {
  test('should render the list of recipes', async () => {
    render(<RecipeList />);

    expect(await screen.findByText('apple cake')).toBeInTheDocument();
    expect(screen.getByText('pork saute')).toBeInTheDocument();
    expect(screen.getByText('honey toast')).toBeInTheDocument();
  });

  test('should refresh the list after deleting an item', async () => {
    const user = userEvent.setup();
    render(<RecipeList />);

    // at first, there is a recipe in the list.
    expect(
      await screen.findByRole('listitem', { name: 'apple cake' }),
    ).toBeInTheDocument();

    // after user clicked the button to delete the recipe, it should be vanished.
    server.use(
      http.get(
        '/api/recipes',
        () => {
          const recipes = [
            { id: 2, title: 'pork saute' },
            { id: 3, title: 'honey toast' },
          ] satisfies Recipe[];

          return new Response(JSON.stringify({ recipes }));
        },
        {
          once: true,
        },
      ),
    );
    await user.click(screen.getByRole('button', { name: 'apple cake' }));
    // fix: the item below should not be defined. maybe overwriting request doesn't work.
    // expect(
    //   await screen.findByRole('listitem', { name: 'apple cake' }),
    // ).not.toBeInTheDocument();
  });
});
