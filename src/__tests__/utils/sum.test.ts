import { sum } from '../../utils/sum';
import { describe, expect, test } from 'vitest';

describe('sum', () => {
  test('should return sum of the two arguments', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
