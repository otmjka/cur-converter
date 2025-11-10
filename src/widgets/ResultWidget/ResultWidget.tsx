import type { FC } from 'react';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';
import * as RW from './ui/ResultWidgetParts';

import type { ResultWidgetState } from './types';

const ResultWidget: FC<{ state: ResultWidgetState }> = ({ state }) => {
  if (state.isRateError) {
    return <RW.ErrorMsg />;
  }

  return (
    <RW.Box>
      <div className="text-18 leading-[22px] font-semibold mb-[24px]">
        Conversion result
      </div>

      <div className="flex justify-center mb-[24px]">
        <div className="flex flex-col">
          <div className="text-24 leading-[29px] font-bold">
            {state.quoteSymbol}
            {state.result}
          </div>
          <div className="text-12 flex justify-center">
            <div>
              {state.amountBase} {state.base} =
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-[24px]" />
      <div className="mb-[24px]">
        <div className="flex mb-[4px]">
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
        <CardContent className="px-[12px] text-center">
          Rates are for informational purposes only and may not reflect
          real-time market rates
        </CardContent>
      </Card>
    </RW.Box>
  );
};

export default ResultWidget;
