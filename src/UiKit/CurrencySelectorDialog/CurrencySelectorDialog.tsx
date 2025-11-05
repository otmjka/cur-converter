import type { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { currenciesData, ratesData2 } from '@/mocks/rates';
import CurrencyLabel from '../Currency/CurrencyLabel';

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
  opened: boolean;
  onOpenChange: (value: boolean) => void;
}> = ({ opened, onOpenChange }) => {
  return (
    <Dialog open={opened} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select currency</DialogTitle>
          <DialogDescription>
            Choose a currency from the list below or use the search bar to find
            a specific currency.
          </DialogDescription>
        </DialogHeader>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {itemsSub.map((item) => (
                <CommandItem key={item.key}>
                  <CurrencyLabel
                    currency={item.key}
                    title={item.key}
                    sub={item.currency}
                  />
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
