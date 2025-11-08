import { fetchRates } from '@/shared/api';
import { getRateQueryKey } from './getRateQueryKey';
import type { RateKey } from './types';

export const queryFetchRatesInterval = (pair: RateKey) => {
  return {
    queryKey: getRateQueryKey(pair),
    queryFn: () => fetchRates(pair),

    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: false,
    retry: 1,
    meta: pair,
  };
};
