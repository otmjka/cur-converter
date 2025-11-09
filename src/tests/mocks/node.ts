import { setupServer } from 'msw/node';
import { handlers } from './handlers';

console.log('mocks/node');
export const server = setupServer(...handlers);
