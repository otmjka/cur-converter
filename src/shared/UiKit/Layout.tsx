import type { FC } from 'react';
import { Outlet } from 'react-router';
// import { Toaster } from '@/components/ui/sonner';
// import bg from './index.jpg';

const Layout: FC = () => {
  return (
    <div>
      {/* <Toaster /> */}
      <div>
        <Outlet />
        {/* <div className="absolute -top-[85px] left-[36px] pointer-events-none opacity-[.3]">
          <img src={bg} alt="index" />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
