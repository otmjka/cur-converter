import type { FC, ReactNode } from 'react';
import { Card, CardContent } from '@/shared/components/ui/card';

export const Box: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Card className="w-[336px] h-[318px] py-[20px]">
      <CardContent className="px-[20px]">{children}</CardContent>
    </Card>
  );
};

export const ErrorMsg: FC = () => {
  return (
    <Box>
      <Card className="text-12 py-[8px] bg-red-200 border-1 border-red-500">
        <CardContent className="px-[12px] text-center p-0">
          <div className="!text-18 text-red-500 p-0">Error</div>
          <div>
            Unable to fetch the latest rates. Check your internet connection or
            refresh the widget.
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};
