import { createRoot } from 'react-dom/client';

import { App } from './App';

import './App/index.css';

import appRouter from './App/appRouter';

createRoot(document.getElementById('root')!).render(
  <App appRouter={appRouter} />,
);
