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
            <Wifi size={12} className="text-green-600" />
            <span className="text-12 text-green-600">Online</span>
          </Badge>
        )}
        {!isOnline && (
          <>
            <WifiOff className="w-5 h-5 text-orange-600" />
            <span className="text-12 text-orange-600">Offline</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectStatus;
