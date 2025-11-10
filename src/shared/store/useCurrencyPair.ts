import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { RateKey } from '../types/types';
import { storageKeys } from './keys';

const DEFAULT_PAIR = { base: 'USD', quote: 'EUR' };

export const useCurrencyPair = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: storageKeys.pairKey,
    queryFn: async () => ({ pair: DEFAULT_PAIR, amount: '1' }),
    staleTime: Infinity,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['set-currency-pair'],
    mutationFn: async ({
      pair,
      amount,
    }: {
      pair: RateKey;
      amount: string;
    }): Promise<{ pair: RateKey; amount: string }> => ({ pair, amount }),
    onSuccess: (newPair) => {
      queryClient.setQueryData(storageKeys.pairKey, newPair);
    },
  });

  return {
    pair: data?.pair,
    amount: data?.amount,
    setPair: ({ pair, amount }: { pair: RateKey; amount: string }) =>
      mutate({ pair, amount }),
    isPending,
  };
};
