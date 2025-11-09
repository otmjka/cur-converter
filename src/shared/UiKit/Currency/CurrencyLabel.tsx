import type { FC } from 'react';
import CurrencySign from './CurrencySign';

const CurrencyLabel: FC<{
  title: string;
  sub: string;
  symbol: string;
}> = ({ title, sub, symbol }) => (
  <div className="flex grow-1 gap-[12px]">
    <div className="flex items-center">
      <CurrencySign symbol={symbol} />
    </div>
    <span className="flex flex-col grow-1">
      <div className="text-neutral-950 flex text-14 font-semibold">{title}</div>
      <div className="text-neutral-500 flex text-12 font-normal">{sub}</div>
    </span>
  </div>
);

export default CurrencyLabel;
