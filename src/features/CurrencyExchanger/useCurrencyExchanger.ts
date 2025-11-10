import { useCallback, useMemo, useState } from 'react';
import type { UseCurrencyExchanger } from './types';
import type { ConverterFormValues } from '@/widgets/ConvertForm';
import { useCurrencyRate } from '@/shared/store/useCurrencyRate';
import { useCurrenciesInfo } from '@/shared/store/useCurrenciesInfo';
import { currencySelectorMapper } from './currencySelectorMapper';
import { getCurrencyInfo } from './getCurrencyInfo';
import useDebounce from '@rooks/use-debounce';
import { parseCurrency } from '@/shared/lib/currency';

const useCurrencyExchanger: UseCurrencyExchanger = ({
  pair,
  amount,
  setPair,
}) => {
  const currenciesInfo = useCurrenciesInfo();

  const currencySelectDialogItems = useMemo(
    () => currencySelectorMapper(currenciesInfo?.currencyInfoList),
    [currenciesInfo],
  );

  const currencyRate = useCurrencyRate({ pair });

  const [formValue, setFormValue] = useState<ConverterFormValues>({
    base: pair.base,
    quote: pair.quote,
    amount,
  });

  const { rate, isError: isRateError } = currencyRate;

  // form value changed
  const onChangeHandler = useCallback(
    async (values: ConverterFormValues) => {
      // TODO: debounce, validation
      // move to helper
      if (
        values.amount === formValue.amount &&
        values.base === formValue.base &&
        values.quote === formValue.quote
      ) {
        return;
      }

      setPair({
        pair: { base: values.base, quote: values.quote },
        amount: values.amount,
      });
      setFormValue(values);
    },
    [formValue, setPair],
  );
  const debouncedOnChange = useDebounce(onChangeHandler, 250) as (
    values: ConverterFormValues,
  ) => void;

  const amountNumber = parseCurrency(formValue.amount);
  const result = rate ? rate * amountNumber : ``;

  const baseInfo = getCurrencyInfo(
    currenciesInfo?.currencyInfoList,
    formValue.base,
  );
  const quoteInfo = getCurrencyInfo(
    currenciesInfo?.currencyInfoList,
    formValue.quote,
  );
  const quoteSymbol = quoteInfo?.symbol || '.';
  return {
    convertForm: {
      currencySelectDialogItems,
      baseInfo,

      quoteInfo,
      value: formValue,
      onChange: debouncedOnChange,
    },
    resultWidget: {
      isRateError: isRateError && !rate,
      result: result ? result.toFixed(2) : '',
      amountBase: formValue.amount,
      base: formValue.base,
      baseInQuote: rate ? rate.toFixed(6) : '',
      quote: formValue.quote,
      quoteSymbol,
      quoteInBase: rate ? (1 / rate).toFixed(6) : '',
    },
  };
};

export default useCurrencyExchanger;
