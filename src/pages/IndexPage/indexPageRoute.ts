import type { QueryClient } from '@tanstack/react-query';
import IndexPage from './IndexPage';

const DEFAULT_PAIR = { base: 'USD', quote: 'EUR' };
const PAIR_KEY = ['current-pair'];

export const indexPageRoute = ({
  queryClient,
}: {
  queryClient: QueryClient;
}) => {
  return {
    id: 'index-page',
    index: true,
    Component: IndexPage,
    loader: async () => {
      const pair = await queryClient.fetchQuery({
        queryKey: PAIR_KEY,
        queryFn: async () => DEFAULT_PAIR,
        staleTime: Infinity,
      });

      return { pair };
    },
  };
};
