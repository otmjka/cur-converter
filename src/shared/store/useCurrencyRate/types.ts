import type { RatesResponse } from '@/shared/api/currencies/types';
import type { RateKey } from '@/shared/types';
import type { ConvertFormState } from '@/widgets/ConvertForm';
import type { ResultWidgetState } from '@/widgets/ResultWidget';

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
  responseData: RatesResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isOnline: boolean;
  refresh: () => Promise<void>;
};

export type UseCurrencyRate = (
  params: UseCurrencyRateParams,
) => UseCurrencyRateResult;
