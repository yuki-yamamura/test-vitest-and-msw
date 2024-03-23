import HackerNewsStories from '../../components/HackerNewsStories';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('HackerNewsStories', () => {
  test('should show the list of story ids', async () => {
    render(<HackerNewsStories />);

    const list = await screen.findByRole('list');
    const id = within(list).getByRole('listitem', { name: '39756519' });

    expect(id).toBeDefined();
  });
});
