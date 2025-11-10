import { type FC, Suspense, lazy } from 'react';

import { H1 } from '@/shared/UiKit';
import { useCurrencyPair } from '@/shared/store/useCurrencyPair';

import * as Parts from './ui/IndexPage.parts';
import { StatusWidget } from '@/widgets/StatusWidget';

const CurrencyExchanger = lazy(() => import('@/features/CurrencyExchanger'));

const IndexPage: FC = () => {
  const { pair, amount, setPair } = useCurrencyPair();
  return (
    <Parts.Box>
      <div className="mb-[30px]">
        <H1 data-testid="cc-h1" children="Currency converter" />
        <Parts.SubText children="Get real-time exchange rates" />
      </div>
      {pair && <StatusWidget pair={pair} />}

      <Suspense fallback={<Parts.WidgetLoader />}>
        {pair && amount && (
          <CurrencyExchanger state={{ amount, pair, setPair }} />
        )}
        {!pair && <Parts.WidgetLoader />}
      </Suspense>
    </Parts.Box>
  );
};

export default IndexPage;
