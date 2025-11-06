import type { ConverterFormValues } from '@/types';
import type { UseFormReturn } from 'react-hook-form';

type UseConvertFormControllerParams = {
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
