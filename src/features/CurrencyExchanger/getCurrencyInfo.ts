import type { CurrencyListResponse } from '@/shared/api/currencies/types';

export const getCurrencyInfo = (dict?: CurrencyListResponse, key?: string) =>
  !!dict && !!key ? dict[key] : null;
