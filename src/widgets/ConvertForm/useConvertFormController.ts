import { useCallback, useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type ConverterFormValues } from './types';
import { converterFormSchema } from './validation';
import type { UseConvertFormController } from './types';

const useConvertFormController: UseConvertFormController = ({
  value,
  onChange,
}) => {
  const [currencySelectorDialogOpened, setCurrencySelectorDialogOpened] =
    useState<boolean>(false);
  const [dialogSelectedCurrency, setDialogSelectedCurrency] =
    useState<string>('');

  const [selectedInputId, setSelectedInputId] = useState<string>();

  const form = useForm<ConverterFormValues>({
    resolver: zodResolver(converterFormSchema),
    mode: 'onChange',
    defaultValues: value,
  });

  const { watch, trigger } = form;
  const formValues = watch();

  useEffect(() => {
    const checkValidity = async () => {
      const isValid = await trigger();
      if (onChange && isValid) {
        onChange(formValues);
      }
    };

    checkValidity();
  }, [formValues, onChange, trigger]);

  const onSubmit = useCallback((data: ConverterFormValues) => {
    console.log(data);
  }, []);

  const openSelectCurrecyDialog = useCallback(
    (inputId: string) => {
      setSelectedInputId(inputId);
      setCurrencySelectorDialogOpened(true);
      setDialogSelectedCurrency(
        inputId === 'base' ? formValues.base : formValues.quote,
      );
    },
    [formValues],
  );

  const onChangeCurrencyValue = useCallback(
    (selectedCurrency: string) => {
      switch (selectedInputId) {
        case 'base':
          form.setValue('base', selectedCurrency, { shouldValidate: true });
          return;
        case 'quote':
          form.setValue('quote', selectedCurrency, { shouldValidate: true });
          return;
      }
    },
    [form, selectedInputId],
  );

  return {
    dialogSelectedCurrency,
    currencySelectorDialogOpened,
    openSelectCurrecyDialog,
    form,
    onSubmit,
    setCurrencySelectorDialogOpened,
    onChangeCurrencyValue,
  };
};

export default useConvertFormController;
