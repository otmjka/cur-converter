import { Badge } from '@/components/ui/badge';
import { Wifi, WifiOff } from 'lucide-react';
import type { FC } from 'react';
const ConnectStatus: FC<{ isOnline: boolean }> = ({ isOnline }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {isOnline && (
          <Badge
            variant="secondary"
            className="bg-green-50 border-green-200 rounded-[8px] text-white dark:bg-blue-600"
          >
            <Wifi size={12} className="text-green-600" strokeWidth={3} />
            <span className="text-12 text-green-600 font-semibold">Online</span>
          </Badge>
        )}
        {!isOnline && (
          <Badge
            variant="secondary"
            className="bg-red-50 border-red-200 rounded-[8px] text-white dark:bg-blue-600"
          >
            <WifiOff size={12} className="text-red-500" strokeWidth={3} />
            <span className="text-12 text-red-500 font-semibold">Offline</span>
          </Badge>
        )}
      </div>
    </div>
  );
};

export default ConnectStatus;
