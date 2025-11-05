import type { FC } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const SwitchCur: FC = () => (
  <div className="flex bg-yellow-500 size-[42px] items-center justify-center">
    <div>
      <ArrowLeftRight />
    </div>
  </div>
);

export default SwitchCur;
