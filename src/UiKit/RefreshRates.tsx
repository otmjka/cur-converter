import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';

const RefreshRates: FC = () => {
  return (
    <Button size="sm" onClick={() => {}} className="h-[23px] text-12 px-2">
      <RotateCw />
      <span>Refresh rates</span>
    </Button>
  );
};

export default RefreshRates;
