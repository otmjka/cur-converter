import type { FC } from 'react';

import { ConnectStatus, H1, LastUpdated, RefreshRates } from '@/UiKit';
import { useCurrencyPair } from '@/shared/store/useCurrencyPair';
import { CurrencyExchanger } from '@/features/CurrencyExchanger';

import * as Parts from './IndexPage.parts';

const IndexPage: FC = () => {
  const { pair, setPair } = useCurrencyPair();
  return (
    <Parts.Box>
      <div className="mb-[30px]">
        <H1 children="Currency converter" />
        <div className="mt-[10px] font-inter text-center text-14 tracking-tight text-balance text-neutral-500 leading-[17px]">
          Get real-time exchange rates
        </div>
      </div>
      <div className="flex flex-col items-center xs:flex-row mb-[30px] xs:justify-center gap-[16px] xs:h-[23px]">
        <ConnectStatus isOnline={true} />
        <LastUpdated />
        <div>
          <RefreshRates />
        </div>
      </div>
      {pair && <CurrencyExchanger state={{ initPair: pair, setPair }} />}
      {!pair && 'loading...'}
    </Parts.Box>
  );
};

export default IndexPage;
