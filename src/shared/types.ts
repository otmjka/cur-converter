import type { ConverterFormValues } from '@/types';

export type ConvertFormState = {
  value: ConverterFormValues;
  onChange: (values: ConverterFormValues) => void;
};

export type ResultWidgetState = {
  result: string;
  base: string;
  baseInQuote: string;
  quote: string;
  quoteInBase: string;
};
