import { type FC, StrictMode } from 'react';
import { RouterProvider } from 'react-router/dom';
/* TODO: remove */
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { queryClient, localStoragePersister } from '@/shared/queryClient';

import createAppRouter from './createAppRouter.tsx';

const appRouter = createAppRouter({ queryClient });

const App: FC = () => {
  return (
    <StrictMode>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: localStoragePersister }}
      >
        <RouterProvider router={appRouter} />
        {/* TODO: remove */}
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistQueryClientProvider>
    </StrictMode>
  );
};

export default App;
