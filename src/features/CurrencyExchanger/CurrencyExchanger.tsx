import type { FC } from 'react';

import type { RateKey } from '@/shared/types/types';

import { ConvertForm } from '@/widgets/ConvertForm';
import { ResultWidget } from '@/widgets/ResultWidget';

import useCurrencyExchanger from './useCurrencyExchanger';

const CurrencyExchanger: FC<{
  state: { initPair: RateKey; setPair: (p: RateKey) => void };
}> = ({ state: { initPair, setPair } }) => {
  const state = useCurrencyExchanger({ pair: initPair, setPair });
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
