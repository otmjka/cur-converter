import type { FC, ReactNode } from 'react';
import { Card } from '@/components/ui/card';

export const Box: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex h-screen sm:items-center sm:justify-center">
    <div className="p-[10px] w-full sm:w-auto">{children}</div>
  </div>
);

export const SubText: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    className="mt-[10px] font-inter text-center text-14 tracking-tight text-balance text-neutral-500 leading-[17px]"
    children={children}
  />
);

export const WidgetLoader: FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[614px_auto] gap-[30px] items-start">
    <div className="sm:w-[614px]">
      <Card className="w-full py-[20px] h-[191px] bg-neutral-50 shimmer"></Card>
    </div>
    <div className="flex justify-center lg:justify-start">
      <Card className="w-[336px] h-[318px] bg-neutral-50 shimmer"></Card>
    </div>
  </div>
);
