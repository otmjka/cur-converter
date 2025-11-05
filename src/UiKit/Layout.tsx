import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/sonner';
// import AppHeader from './AppHeader';
import bg from './index.jpg';

const Layout: FC = () => {
  return (
    <div>
      {/* <AppHeader /> */}
      <Toaster />
      <div>
        <Outlet />
        <div className="absolute top-0 left-0 pointer-events-none opacity-[.3]">
          <img src={bg} alt="index" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
