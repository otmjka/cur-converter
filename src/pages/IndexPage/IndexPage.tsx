import { type FC, Suspense, lazy } from 'react';

import { H1 } from '@/shared/UiKit';
import { useCurrencyPair } from '@/shared/store/useCurrencyPair';
// import { CurrencyExchanger } from '@/features/CurrencyExchanger';

import * as Parts from './IndexPage.parts';
import { StatusWidget } from '@/widgets/StatusWidget';

const CurrencyExchanger = lazy(() => import('@/features/CurrencyExchanger'));

const IndexPage: FC = () => {
  const { pair, amount, setPair } = useCurrencyPair();
  return (
    <Parts.Box>
      <div className="mb-[30px]">
        <H1 data-testid="cc-h1" children="Currency converter" />
        <div className="mt-[10px] font-inter text-center text-14 tracking-tight text-balance text-neutral-500 leading-[17px]">
          Get real-time exchange rates
        </div>
      </div>
      {pair && <StatusWidget pair={pair} />}

      <Suspense fallback={<div>loading exchanger...</div>}>
        {pair && amount && (
          <CurrencyExchanger state={{ amount, pair, setPair }} />
        )}
      </Suspense>

      {!pair && 'loading...'}
    </Parts.Box>
  );
};

export default IndexPage;
