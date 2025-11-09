import { cn } from '@/shared/lib/utils';
import type { FC } from 'react';

const CurrencySign: FC<{ symbol: string }> = ({ symbol }) => {
  return (
    <div
      className={cn(
        'bg-blue-50 size-[30px] flex justify-center items-center rounded-full border border-blue-200 text-blue-700 overflow-hidden whitespace-nowrap',
      )}
    >
      {symbol.length === 1 && <span className="text-18">{symbol}</span>}
      {symbol.length > 1 && symbol.length < 4 && (
        <span className="!text-[10px]">{symbol}</span>
      )}
      {symbol.length > 3 && <span className="!text-[8px]">{symbol}</span>}
    </div>
  );
};

export default CurrencySign;
