export type RatesResponse = {
  success: boolean;
  timestamp: number;
  date: string;
  base: string;
  rates: Record<string, number>;
};

export type CurrencyInfo = {
  code: string; // 'AFN',
  name: string; // 'Afghan Afghani',
  decimal_digits: number;
  name_plural: string; // 'Afghan Afghanis',
  rounding: number;
  symbol: string; // 'Af',
  symbol_native: string; // '؋',
};

export type CurrencyListResponse = Record<string, CurrencyInfo>;
/*
{
  AFN: {
    code: 'AFN',
    name: 'Afghan Afghani',
    decimal_digits: 0,
    name_plural: 'Afghan Afghanis',
    rounding: 0,
    symbol: 'Af',
    symbol_native: '؋',
  },
  UZS: {
    code: 'UZS',
    name: 'Uzbekistan Som',
    decimal_digits: 0,
    name_plural: 'Uzbekistan som',
    rounding: 0,
    symbol: 'UZS',
    symbol_native: 'UZS',
  },
};
*/
