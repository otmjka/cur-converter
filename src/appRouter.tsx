import { createBrowserRouter } from 'react-router';
import { Layout } from '@/UiKit';

import IndexPage from './IndexPage';

const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [{ index: true, Component: IndexPage }],
  },
]);

export default appRouter;
