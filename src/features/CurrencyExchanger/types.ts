import type {
  ConvertFormState,
  RateKey,
  ResultWidgetState,
} from '@/shared/types';

/* UseCurrencyExchanger */
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
