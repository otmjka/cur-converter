import { z } from 'zod';

import type { UseFormReturn } from 'react-hook-form';
import type { converterFormSchema } from './validation';
import type { CurrencySelectorItems } from '@/shared/types';
import type { CurrencyInfo } from '@/shared/api/currencies/types';

export type ConvertFormState = {
  currencySelectDialogItems: CurrencySelectorItems;
  baseInfo: CurrencyInfo | null;
  quoteInfo: CurrencyInfo | null;
  value: ConverterFormValues;
  onChange: (values: ConverterFormValues) => void;
};

/* UseConvertFormController */
type UseConvertFormControllerParams = {
  value: ConverterFormValues;
  onChange?: (data: ConverterFormValues) => void;
};

type UseConvertFormControllerResult = {
  dialogSelectedCurrency: string;
  currencySelectorDialogOpened: boolean;
  openSelectCurrecyDialog: (inputId: string) => void;
  form: UseFormReturn<ConverterFormValues>;
  onSubmit: (data: ConverterFormValues) => void;
  setCurrencySelectorDialogOpened: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  onChangeCurrencyValue: (selectedCurrency: string) => void;
};

export type UseConvertFormController = (
  params: UseConvertFormControllerParams,
) => UseConvertFormControllerResult;

export type ConverterFormValues = z.infer<typeof converterFormSchema>;
