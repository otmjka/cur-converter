import type { CurrencyListResponse } from '@/shared/api/currencies/types';

export type RateKey = {
  base: string;
  quote: string;
};

export type CachedRate = {
  rate: number;
  timestamp: number;
  version: string; // на случай смены API
};

export type CurrencyListCache = {
  list: CurrencyListResponse;
  timestamp: number;
  version: string;
};
