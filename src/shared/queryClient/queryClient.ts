import { QueryClient } from '@tanstack/react-query';

import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

// TODO:
const asyncLocalStorage = {
  getItem: (key: string) => Promise.resolve(window.localStorage.getItem(key)),
  setItem: (key: string, value: string) =>
    Promise.resolve(window.localStorage.setItem(key, value)),
  removeItem: (key: string) =>
    Promise.resolve(window.localStorage.removeItem(key)),
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

export const localStoragePersister = createAsyncStoragePersister({
  storage: asyncLocalStorage,
});
