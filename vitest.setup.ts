import { server } from './src/mocks/server';
import { afterAll, beforeAll, beforeEach } from 'vitest';

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());
