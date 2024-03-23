import HtmlDocument from '../../components/HtmlDocument';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('HtmlDocument', () => {
  test('should show HTML that is converted from Markdown', () => {
    const markdownText = `
  # Pluto

  **Pluto** (minor-planet designation: **134340 Pluto**) is a
  [dwarf planet](https://en.wikipedia.org/wiki/Dwarf_planet) in the
  [Kuiper belt](https://en.wikipedia.org/wiki/Kuiper_belt). 
  `;

    render(<HtmlDocument markdownText={markdownText} />);
    expect(screen.getByText('<h1>Pluto</h1>', { exact: false }));
  });
});
