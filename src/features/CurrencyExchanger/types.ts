import type { RateKey } from '@/shared/types';
import type { ConvertFormState } from '@/widgets/ConvertForm';

import type { ResultWidgetState } from '@/widgets/ResultWidget';

/* UseCurrencyExchanger */
type UseCurrencyExchangerParams = {
  pair: RateKey;
  amount: string;
  setPair: (p: { pair: RateKey; amount: string }) => void;
};

type UseCurrencyExchangerReturn = {
  convertForm: ConvertFormState;
  resultWidget: ResultWidgetState;
};

export type UseCurrencyExchanger = (
  params: UseCurrencyExchangerParams,
) => UseCurrencyExchangerReturn;
