import type { FC } from 'react';
import { Input } from '@/components/ui/input';

const AmountInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  return (
    <Input
      className="text-center !text-14 leading-[41px] h-[41px] px-[12px] text-neutral-950 bg-neutral-50"
      {...props}
    />
  );
};

export default AmountInput;
