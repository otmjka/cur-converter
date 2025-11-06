import { ConnectStatus, LastUpdated, RefreshRates } from '@/UiKit';
import type { FC } from 'react';

import { CurrencyExchanger } from '@/CurrencyExchanger';

const IndexPage: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-[10px]">
        <div className="mb-[30px]">
          <h1 className="font-inter scroll-m-20 text-center text-32 font-extrabold tracking-[.4px] text-balance leading-[39px]">
            Currency converter
          </h1>
          <div className="mt-[10px] font-inter text-center text-14 tracking-tight text-balance leading-[17px]">
            Get real-time exchange rates
          </div>
        </div>
        <div className="flex mb-[30px] justify-center gap-[16px] h-[23px]">
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
