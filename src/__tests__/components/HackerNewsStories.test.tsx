import HackerNewsStories from '../../components/HackerNewsStories';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('HackerNewsStories', () => {
  test('should show the list of story ids', async () => {
    render(<HackerNewsStories />);

    const list = await screen.findByRole('list');

    for (let i = 1; i <= 5; i++) {
      expect(within(list).getByRole('listitem', { name: i.toString() }));
    }
  });
});
