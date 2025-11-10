import { useCallback, useMemo } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useThrottle from '@rooks/use-throttle';

import { fetchRates } from '@/shared/api';
import type { UseCurrencyRate } from './types';
import { getRateQueryKey } from './getRateQueryKey';

export const useCurrencyRate: UseCurrencyRate = ({ pair }) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: useMemo(() => getRateQueryKey(pair), [pair]),
    queryFn: useCallback(() => fetchRates(pair), [pair]),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: false,
    retry: 1,
    meta: pair,
  });

  const refresh = useCallback(
    async () =>
      queryClient.invalidateQueries({ queryKey: getRateQueryKey(pair) }),
    [pair, queryClient],
  );
  const [handleRefresh] = useThrottle(refresh, 250);
  const derivedState = useMemo(() => {
    const rate = query.data?.rates[pair.quote];
    return { rate };
  }, [query.data, pair.quote]);

  return {
    responseData: query.data,
    rate: derivedState.rate ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isOnline: !query.isError,
    refresh: handleRefresh,
  };
};
