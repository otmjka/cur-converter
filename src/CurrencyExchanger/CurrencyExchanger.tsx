import type { FC } from 'react';

import { ConvertForm } from '@/ConvertForm';
import { ResultWidget } from '@/ResultWidget';
import useCurrencyExchanger from './useCurrencyExchanger';

const CurrencyExchanger: FC = () => {
  const state = useCurrencyExchanger({});
  return (
    <div className="flex gap-[30px]">
      <div className="w-[614px] h-[193px]">
        <ConvertForm state={state.convertForm} />
      </div>
      <ResultWidget state={state.resultWidget} />
    </div>
  );
};

export default CurrencyExchanger;
