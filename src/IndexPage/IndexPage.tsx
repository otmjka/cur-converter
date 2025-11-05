import { Card, CardContent } from '@/components/ui/card';
import { ConnectStatus, LastUpdated, RefreshRates } from '@/UiKit';
import type { FC } from 'react';
import { Separator } from '@/components/ui/separator';
// font-family: Inter;
// font-weight: 600;
// font-style: Semi Bold;
// font-size: 32px;
// leading-trim: NONE;
// line-height: 100%;
// letter-spacing: 0%;

const IndexPage: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-[10px]">
        <div className="mb-[30px]">
          <h1 className="font-inter scroll-m-20 text-center text-32 font-extrabold tracking-[.4px] text-balance leading-[39px]">
            Currency converter
          </h1>
          <div className="mt-[10px] font-inter text-center text-14 tracking-tight text-balance leading-[17px]">
            Get real-time exchange rates
          </div>
        </div>
        <div className="flex mb-[30px] justify-center gap-[16px] h-[23px]">
          <ConnectStatus isOnline={true} />
          <LastUpdated />
          <div>
            <RefreshRates />
          </div>
        </div>
        <div className="flex gap-[30px]">
          <Card className="w-[614px] h-[193px]">!!!</Card>
          <Card className="w-[336px] h-[318px] py-[20px]">
            <CardContent className="px-[20px]">
              <div className="text-18 leading-[22px] font-semibold mb-[24px]">
                Conversion result
              </div>

              <div className="flex justify-center mb-[24px]">
                <div className="flex flex-col">
                  <div className="text-24 leading-[29px] font-bold">€0.92</div>
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
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
