import type { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { ResultWidgetState } from '@/shared/types';

const ResultWidget: FC<{ state: ResultWidgetState }> = ({ state }) => {
  return (
    <Card className="w-[336px] h-[318px] py-[20px]">
      <CardContent className="px-[20px]">
        <div className="text-18 leading-[22px] font-semibold mb-[24px]">
          Conversion result
        </div>

        <div className="flex justify-center mb-[24px]">
          <div className="flex flex-col">
            <div className="text-24 leading-[29px] font-bold">
              {state.result || `€0.92`}
            </div>
            <div className="text-12">1 USD =</div>
          </div>
        </div>

        <Separator className="mb-[24px]" />
        <div className="mb-[24px]">
          <div className="flex">
            <div>Exchange Rate</div>
            <div>1 USD = 0.920000 EUR</div>
          </div>
          <div className="flex">
            <div>Inverse Rate</div>
            <div>1 EUR = 1.086957 USD</div>
          </div>
        </div>
        <Separator className="mb-[24px]" />
        <div className="text-12">
          Rates are for informational purposes only and may not reflect
          real-time market rates
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultWidget;
