import { z } from 'zod';

import type { UseFormReturn } from 'react-hook-form';

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

export const currencyValidation = {
  isNumeric: (value: string) => {
    if (!/^\d*([,.]\d*)?$/.test(value)) {
      return false;
    }
    const normalizedValue = value.replace(',', '.');
    const numberValue = parseFloat(normalizedValue);
    return !isNaN(numberValue) && isFinite(numberValue);
  },

  isPositive: (value: string) => {
    const normalizedValue = value.replace(',', '.');
    return parseFloat(normalizedValue) > 0;
  },

  hasMaxDecimals: (value: string, maxDecimals: number = 2) => {
    const normalizedValue = value.replace(',', '.');
    const parts = normalizedValue.split('.');
    return parts.length === 1 || parts[1].length <= maxDecimals;
  },
};

export const converterFormSchema = z.object({
  amount: z
    .string()
    .refine(currencyValidation.isNumeric, 'Please enter a valid number')
    .refine(currencyValidation.isPositive, 'Amount must be greater than 0'),

  base: z.string(),
  quote: z.string(),
});

export type ConverterFormValues = z.infer<typeof converterFormSchema>;
