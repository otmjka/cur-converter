import type { FC } from 'react';

import { ConvertForm } from '@/ConvertForm';
import { ResultWidget } from '@/ResultWidget';
import useCurrencyExchanger from './useCurrencyExchanger';
import type { RateKey } from './types';

const CurrencyExchanger: FC<{ state: { initPair: RateKey } }> = ({
  state: { initPair },
}) => {
  const state = useCurrencyExchanger({ pair: initPair });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[614px_auto] gap-[30px] items-start">
      <div className="sm:w-[614px]">
        <ConvertForm state={state.convertForm} />
      </div>
      <div className="flex justify-center lg:justify-start">
        <ResultWidget state={state.resultWidget} />
      </div>
    </div>
  );
};

export default CurrencyExchanger;
