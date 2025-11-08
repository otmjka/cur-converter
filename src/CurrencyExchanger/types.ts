import type { ConvertFormState, ResultWidgetState } from '@/shared/types';

// currency pair rate
export type RateKey = { base: string; quote: string };

type UseCurrencyExchangerParams = {
  pair: RateKey;
};

type UseCurrencyExchangerReturn = {
  convertForm: ConvertFormState;
  resultWidget: ResultWidgetState;
};

export type UseCurrencyExchanger = (
  params: UseCurrencyExchangerParams,
) => UseCurrencyExchangerReturn;

type UseCurrencyRateParams = { pair: RateKey };
type UseCurrencyRateResult = {
  rate: null | number;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isOnline: boolean;
  refresh: () => Promise<void>;
};

export type UseCurrencyRate = (
  params: UseCurrencyRateParams,
) => UseCurrencyRateResult;
