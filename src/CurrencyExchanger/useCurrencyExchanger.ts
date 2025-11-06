import { useCallback, useState } from 'react';
import { type UseCurrencyExchanger } from './types';
import type { ConverterFormValues } from '@/types';

const useCurrencyExchanger: UseCurrencyExchanger = () => {
  const [result, setResult] = useState<string>('%%%');

  const getRates = async ({ base, quote }: { base: string; quote: string }) => {
    try {
      const response = await fetch(
        `https://api.fxratesapi.com/latest?base=${base}&currencies=${quote}&resolution=1m&amount=1&places=6&format=json`,
      );
      const data = await response.json();
      console.log('--->--->--->', data);
      return { data };
    } catch (error) {
      return { error };
    }
  };

  const onChangeHandler = useCallback(async (values: ConverterFormValues) => {
    console.log('!!!', values);
    const { base, quote } = values;
    const result = await getRates({ base, quote });

    if (result.error || !result.data || !result.data.rates[quote]) {
      console.error(result.error, !result.data, !result.data.rates[quote]);
      return;
    }

    const rate = result.data.rates[quote];

    // 1 * base = rate * quote

    console.log('result:::', quote, rate, base);
    setResult(`${rate * +values.amount}`);
  }, []);

  return {
    convertForm: {
      onChange: onChangeHandler,
    },
    resultWidget: {
      result: result,
    },
  };
};

export default useCurrencyExchanger;
