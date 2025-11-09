import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PAIR_KEY } from './keys';
import type { RateKey } from '../types/types';

const DEFAULT_PAIR = { base: 'USD', quote: 'EUR' };

export const useCurrencyPair = () => {
  const queryClient = useQueryClient();

  const { data: pair } = useQuery({
    queryKey: PAIR_KEY,
    queryFn: async () => DEFAULT_PAIR,
    staleTime: Infinity,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['set-currency-pair'],
    mutationFn: async (newPair: RateKey): Promise<RateKey> => newPair,
    onSuccess: (newPair) => {
      queryClient.setQueryData(PAIR_KEY, newPair);
    },
  });

  return {
    pair,
    setPair: (p: RateKey) => mutate(p),
    isPending,
  };
};
