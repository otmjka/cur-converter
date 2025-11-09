import type {
  CurrencyInfo,
  CurrencyListResponse,
} from '@/shared/api/currencies/types';
import type { CurrencySelectorItem } from '@/shared/types';

export const currencySelectorMapper = (
  dict?: CurrencyListResponse,
): Array<CurrencySelectorItem> => {
  if (!dict) {
    return [];
  }

  const keys = Object.keys(dict);
  const itemsSub = keys.map((itemKey) => {
    const dictItem: CurrencyInfo = dict[itemKey];
    return {
      key: itemKey,
      title: dictItem?.name || '-',
      symbol: dictItem?.symbol || '-',
    };
  });

  return itemsSub;
};
