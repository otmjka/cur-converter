import type { FC } from 'react';
import { Check } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/shared/components/ui/command';
import { currenciesData, ratesData2 } from '@/tests/mocks/rates';
import CurrencyLabel from '../Currency/CurrencyLabel';
import CommandInput from './CommandInput';

const items = Object.keys(ratesData2.rates);
const itemsSub = items.map((itemKey) => {
  const dictItem = currenciesData.find(
    (dictItem) => dictItem.abbreviation === itemKey,
  );
  return {
    key: itemKey,
    currency: dictItem?.currency || '-',
    symbol: dictItem?.symbol || '-',
  };
});

const CurrencySelectorDialog: FC<{
  currentValue: string;
  opened: boolean;
  onSetValue: (value: string) => void;
  onOpenChange: (value: boolean) => void;
}> = ({ currentValue, opened, onSetValue, onOpenChange }) => {
  return (
    <Dialog open={opened} onOpenChange={onOpenChange}>
      <DialogContent className="p-[16px]">
        <DialogHeader>
          <DialogTitle>Select currency</DialogTitle>
          <DialogDescription>
            Choose a currency from the list below or use the search bar to find
            a specific currency.
          </DialogDescription>
        </DialogHeader>
        <Command className="[&_[cmdk-input-wrapper]]:border-b-0">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {itemsSub.map((item) => (
                <CommandItem
                  key={item.key}
                  onSelect={() => {
                    onSetValue(item.key);
                    onOpenChange(false);
                  }}
                >
                  <div className="flex w-full items-center">
                    <div className="grow-1">
                      <CurrencyLabel
                        currency={item.key}
                        title={item.key}
                        sub={item.currency}
                      />
                    </div>
                    {item.key === currentValue && (
                      <div>
                        <Check className="text-blue-400" />
                      </div>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default CurrencySelectorDialog;
