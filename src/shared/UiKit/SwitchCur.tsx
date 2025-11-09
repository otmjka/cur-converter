import type { FC } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SwitchCur: FC<{ onSwapPair: () => void }> = ({ onSwapPair }) => (
  <div className="flex size-[42px] items-center justify-center">
    <Button
      variant="ghost"
      type="button"
      className="!p-0 flex-1 w-full"
      onClick={() => onSwapPair()}
    >
      <ArrowLeftRight />
    </Button>
  </div>
);

export default SwitchCur;
