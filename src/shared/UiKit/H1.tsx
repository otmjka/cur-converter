import type { FC, ReactNode } from 'react';

const H1: FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="font-inter scroll-m-20 text-center text-32 font-extrabold tracking-[.4px] text-balance leading-[39px]">
    {children}
  </h1>
);

export default H1;
