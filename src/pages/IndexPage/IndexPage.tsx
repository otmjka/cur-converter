import type { FC } from 'react';

import { H1 } from '@/shared/UiKit';
import { useCurrencyPair } from '@/shared/store/useCurrencyPair';
import { CurrencyExchanger } from '@/features/CurrencyExchanger';

import * as Parts from './IndexPage.parts';
import { StatusWidget } from '@/widgets/StatusWidget';

const IndexPage: FC = () => {
  const { pair, setPair } = useCurrencyPair();

  return (
    <Parts.Box>
      <div className="mb-[30px]">
        <H1 data-testid="cc-h1" children="Currency converter" />
        <div className="mt-[10px] font-inter text-center text-14 tracking-tight text-balance text-neutral-500 leading-[17px]">
          Get real-time exchange rates
        </div>
      </div>
      {pair && <StatusWidget pair={pair} />}

      {pair && <CurrencyExchanger state={{ initPair: pair, setPair }} />}
      {!pair && 'loading...'}
    </Parts.Box>
  );
};

export default IndexPage;
