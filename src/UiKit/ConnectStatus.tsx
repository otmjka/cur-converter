import { Wifi, WifiOff } from 'lucide-react';
import type { FC } from 'react';
const ConnectStatus: FC<{ isOnline: boolean }> = ({ isOnline }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {isOnline && (
          <>
            <Wifi size={12} className="text-green-600" />
            <span className="text-12 text-green-600">Online</span>
          </>
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
