import type { FC } from 'react';
import { Outlet } from 'react-router';
import { Toaster } from '@/components/ui/sonner';

const Layout: FC = () => {
  return (
    <div>
      <Toaster />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
