import type { ConvertFormState, ResultWidgetState } from '@/shared/types';

type UseCurrencyExchangerParams = unknown;

type UseCurrencyExchangerReturn = {
  convertForm: ConvertFormState;
  resultWidget: ResultWidgetState;
};

export type UseCurrencyExchanger = (
  params: UseCurrencyExchangerParams,
) => UseCurrencyExchangerReturn;
