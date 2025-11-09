import type { FC, ReactNode } from 'react';

export const Box: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen sm:items-center sm:justify-center">
      <div className="p-[10px] w-full sm:w-auto">{children}</div>
    </div>
  );
};
