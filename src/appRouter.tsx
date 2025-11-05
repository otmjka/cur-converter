import { createBrowserRouter } from 'react-router';
import { Layout } from '@/UiKit';

import IndexPage from './IndexPage';

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [{ index: true, Component: IndexPage }],
    },
  ],
  {
    basename: import.meta.env.BASE_URL, // ✅ используем base из Vite config
  },
);

export default appRouter;
