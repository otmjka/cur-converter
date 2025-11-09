import type {
  ConvertFormState,
  RateKey,
  ResultWidgetState,
} from '@/shared/types';

type UseCurrencyExchangerParams = {
  pair: RateKey;
  setPair: (p: RateKey) => void;
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
