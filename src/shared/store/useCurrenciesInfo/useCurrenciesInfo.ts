import { useQuery } from '@tanstack/react-query';
import { currencyList } from '@/shared/api';
import { storageKeys } from '../keys';

export const useCurrenciesInfo = () => {
  const query = useQuery({
    queryKey: storageKeys.currenciesInfo,
    queryFn: async () => currencyList(),
    staleTime: Infinity,
  });

  return {
    currencyInfoList: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isOnline: !query.isError,
  };
};
