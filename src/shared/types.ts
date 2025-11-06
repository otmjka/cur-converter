import type { ConverterFormValues } from '@/types';

export type ConvertFormState = {
  onChange: (values: ConverterFormValues) => void;
};

export type ResultWidgetState = {
  result: string;
};
