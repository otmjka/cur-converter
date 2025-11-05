import type { FC } from 'react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { ratesData2 } from '@/mocks/rates';
import { Button } from '@/components/ui/button';
import CurrencySign from '../CurrencySign';

// const items = Object.keys(ratesData2.rates);

const CurrencySelector: FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Button
      className="w-[254px] h-[42px]"
      type="button"
      onClick={() => onChange('ETH')}
    >
      <div className="flex grow-1">
        <span>
          <CurrencySign />
        </span>
        <span className="flex flex-col grow-1">
          <span>{value}</span>
          <span>sub</span>
        </span>
      </div>
    </Button>
  );
  // return (
  //   <Select value={value} onValueChange={onChange}>
  //     <SelectTrigger data-testid="workplace-select">
  //       <SelectValue placeholder="Select workplace category" />
  //     </SelectTrigger>
  //     <SelectContent>
  //       {items.map((currencySlag) => (
  //         <SelectItem
  //           key={currencySlag}
  //           value={currencySlag}
  //           data-testid={`currency-${currencySlag}`}
  //         >
  //           {currencySlag}
  //         </SelectItem>
  //       ))}
  //     </SelectContent>
  //   </Select>
  // );
};

export default CurrencySelector;
