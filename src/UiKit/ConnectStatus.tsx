import { Wifi, WifiOff } from 'lucide-react';
import type { FC } from 'react';

const ConnectStatus: FC<{ isOnline: boolean }> = ({ isOnline }) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {isOnline && (
          <>
            <Wifi className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-600">Online</span>
          </>
        )}
        {!isOnline && (
          <>
            <WifiOff className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-orange-600">Offline</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectStatus;
