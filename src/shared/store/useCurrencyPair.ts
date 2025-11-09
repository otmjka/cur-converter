import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { RateKey } from '../types/types';
import { storageKeys } from './keys';

const DEFAULT_PAIR = { base: 'USD', quote: 'EUR' };

export const useCurrencyPair = () => {
  const queryClient = useQueryClient();

  const { data: pair } = useQuery({
    queryKey: storageKeys.pairKey,
    queryFn: async () => DEFAULT_PAIR,
    staleTime: Infinity,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['set-currency-pair'],
    mutationFn: async (newPair: RateKey): Promise<RateKey> => newPair,
    onSuccess: (newPair) => {
      queryClient.setQueryData(storageKeys.pairKey, newPair);
    },
  });

  return {
    pair,
    setPair: (p: RateKey) => mutate(p),
    isPending,
  };
};
