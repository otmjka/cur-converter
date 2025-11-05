import { DollarSign } from 'lucide-react';
import type { FC } from 'react';

const CurrencySign: FC<{ currency: string }> = () => {
  return (
    <div className="bg-blue-50 size-[30px] flex justify-center items-center rounded-full border border-blue-200">
      <DollarSign className="text-blue-700" />
    </div>
  );
};

export default CurrencySign;
