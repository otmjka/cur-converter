import type { FC } from 'react';
import { ConnectStatus, LastUpdated, RefreshRates } from '@/shared/UiKit';
import type { RateKey } from '@/shared/types';
import { useCurrencyRate } from '@/shared/store/useCurrencyRate';
import { formatDate } from '@/shared/lib/formatDate';

const StatusWidget: FC<{ pair: RateKey }> = ({ pair }) => {
  const widget = useCurrencyRate({ pair });
  const { responseData, refresh, isOnline } = widget;
  return (
    <div className="flex flex-col items-center xs:flex-row mb-[30px] xs:justify-center gap-[16px] xs:h-[23px]">
      <ConnectStatus isOnline={isOnline} />
      <LastUpdated value={formatDate(responseData?.timestamp)} />
      <div>
        <RefreshRates onRefresh={refresh} />
      </div>
    </div>
  );
};

export default StatusWidget;
