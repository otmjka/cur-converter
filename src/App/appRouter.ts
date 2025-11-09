import { createBrowserRouter } from 'react-router';

import { Layout } from '@/shared/UiKit';

import { indexPageRoute } from '../pages/IndexPage';

export const appRoutes = [
  {
    path: '/',
    Component: Layout,
    children: [indexPageRoute],
  },
];

const appRouter = createBrowserRouter(appRoutes, {
  basename: import.meta.env.BASE_URL,
});

export default appRouter;
