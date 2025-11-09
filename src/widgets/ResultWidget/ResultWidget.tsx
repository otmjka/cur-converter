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
            <div className="text-12">1 {state.base} =</div>
          </div>
        </div>

        <Separator className="mb-[24px]" />
        <div className="mb-[24px]">
          <div className="flex">
            <div className="text-12 flex-1 text-neutral-500 font-semibold">
              Exchange Rate
            </div>
            <div className="text-12 text-neutral-950 font-semibold">
              1 {state.base} = {state.baseInQuote} {state.quote}
            </div>
          </div>
          <div className="flex">
            <div className="text-12 flex-1 text-neutral-500 font-semibold">
              Inverse Rate
            </div>
            <div className="text-12 text-neutral-950 font-semibold">
              1 {state.quote} = {state.quoteInBase} {state.base}
            </div>
          </div>
        </div>
        <Separator className="mb-[24px]" />
        <Card className="text-12 py-[8px] bg-neutral-50 border-0 shadow-none">
          <CardContent className="px-[12px]">
            Rates are for informational purposes only and may not reflect
            real-time market rates
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default ResultWidget;
