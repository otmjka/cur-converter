import { useCallback, useState } from 'react';
import type { UseCurrencyExchanger } from './types';
import type { ConverterFormValues } from '@/widgets/ConvertForm';
import { useCurrencyRate } from '@/shared/store/useCurrencyRate';

const useCurrencyExchanger: UseCurrencyExchanger = ({ pair, setPair }) => {
  const currencyRate = useCurrencyRate({ pair });

  const [formValue, setFormValue] = useState<ConverterFormValues>({
    base: pair.base,
    quote: pair.quote,
    amount: '2',
  });

  const { rate } = currencyRate;

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

      if (values.base !== formValue.base || values.quote !== formValue.quote) {
        console.log('save new pair');
        setPair({ base: values.base, quote: values.quote });
      }
      console.log('!!!', values, formValue);
      setFormValue(values);
    },
    [formValue, setPair],
  );

  // 1(eur)/1(usd) = 1.08 = k. base/quote = k; k = rate
  // quote = base / k
  // 1(USD) = (1 / k)(EUR) =  (1 / 1.08)(EUR) = 0,92592593(EUR)

  // base = k * quote
  // EUR = USD * k = (1 * 1.08)(USD) = 1.08(USD)
  const amount = parseFloat(formValue.amount);
  const result = rate ? rate * amount : ``;

  return {
    convertForm: {
      value: formValue,
      onChange: onChangeHandler,
    },
    resultWidget: {
      result: result ? result.toFixed(2) : '',
      base: formValue.base,
      baseInQuote: rate ? rate.toFixed(6) : '',
      quote: formValue.quote,
      quoteInBase: rate ? (1 / rate).toFixed(6) : '',
    },
  };
};

export default useCurrencyExchanger;
