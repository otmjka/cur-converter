import { ConnectStatus, H1 } from '@/UiKit';
import type { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        {/* <H1>Currency converter</H1> */}
        <h1 className="font-inter scroll-m-20 text-center text-32 font-extrabold tracking-tight text-balance">
          Currency converter
        </h1>
        <div className="font-inter text-center text-14 tracking-tight text-balance">
          Get real-time exchange rates
        </div>
        <ConnectStatus isOnline={true} />
      </div>
    </div>
  );
};

export default IndexPage;
