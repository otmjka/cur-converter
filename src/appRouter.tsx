import { createBrowserRouter } from 'react-router';
import { Layout } from '@/UiKit';

import IndexPage from './pages/IndexPage';

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      children: [{ index: true, Component: IndexPage }],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default appRouter;
