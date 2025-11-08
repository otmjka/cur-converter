import { createBrowserRouter } from 'react-router';

import { Layout } from '@/UiKit';

import { indexPageRoute } from '../pages/IndexPage';
import type { QueryClient } from '@tanstack/react-query';

const createAppRouter = ({ queryClient }: { queryClient: QueryClient }) =>
  createBrowserRouter(
    [
      {
        path: '/',
        Component: Layout,
        children: [indexPageRoute({ queryClient })],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    },
  );

export default createAppRouter;
