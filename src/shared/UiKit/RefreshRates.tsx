import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';

const RefreshRates: FC<{ onRefresh: () => Promise<void> }> = ({
  onRefresh,
}) => {
  return (
    <Button
      size="sm"
      onClick={() => {
        onRefresh();
      }}
      className="h-[23px] text-12 px-2 bg-blue-50 hover:bg-blue-200 border-blue-200 border-1 text-blue-700"
    >
      <RotateCw className="size-[10px]" strokeWidth={3} />
      <span>Refresh rates</span>
    </Button>
  );
};

export default RefreshRates;
