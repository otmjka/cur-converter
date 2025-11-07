import type { FC } from 'react';

import { Button } from '@/components/ui/button';
import CurrencyLabel from '../Currency/CurrencyLabel';

const CurrencySelector: FC<{
  value: string;
  onClick: () => void;
}> = ({ value, onClick }) => {
  return (
    <Button
      className="flex-1 bg-neutral-50 sm:w-[254px] h-[42px] px-[8px] py-[6px] border border-neutral-300 hover:bg-blue-200"
      type="button"
      onClick={onClick}
    >
      <CurrencyLabel title={value} sub={'todo:'} currency={value} />
    </Button>
  );
};

export default CurrencySelector;
