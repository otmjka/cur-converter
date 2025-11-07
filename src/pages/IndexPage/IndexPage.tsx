import type { FC } from 'react';

import { ConnectStatus, H1, LastUpdated, RefreshRates } from '@/UiKit';
import { CurrencyExchanger } from '@/CurrencyExchanger';

const IndexPage: FC = () => {
  return (
    <div className="flex h-screen sm:items-center sm:justify-center">
      <div className="p-[10px] w-full sm:w-auto">
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
        <CurrencyExchanger />
      </div>
    </div>
  );
};

export default IndexPage;
