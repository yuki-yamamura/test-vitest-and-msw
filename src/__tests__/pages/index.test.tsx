import Page from '../../pages';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Home page', () => {
  render(<Page />);
  expect(
    screen.getByRole('heading', { name: 'Hello, World!' }),
  ).toBeInTheDocument();
});
