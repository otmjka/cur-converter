import { useCallback, useState, type FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { type ConverterFormValues, converterFormSchema } from '@/types';
import { CurrencySelector, CurrencySelectorDialog, SwitchCur } from '@/UiKit';
import { AmountInput } from '@/UiKit/Form';

const ConvertForm: FC = () => {
  const [currencySelectorDialogOpened, setCurrencySelectorDialogOpened] =
    useState<boolean>(false);
  const [dialogSelectedCurrency, setDialogSelectedCurrency] =
    useState<string>('');

  const [selectedInputId, setSelectedInputId] = useState<string>();

  const form = useForm<ConverterFormValues>({
    resolver: zodResolver(converterFormSchema),
    mode: 'onChange',
    defaultValues: {
      amount: '1',
      base: 'USD',
      quote: 'EUR',
    },
  });

  const { watch } = form;

  const baseValue = watch('base');
  const quoteValue = watch('quote');

  const onSubmit = useCallback((data: ConverterFormValues) => {
    console.log(data);
  }, []);

  const openSelectCurrecyDialog = useCallback(
    (inputId: string) => {
      setSelectedInputId(inputId);
      setCurrencySelectorDialogOpened(true);
      setDialogSelectedCurrency(inputId === 'base' ? baseValue : quoteValue);
    },
    [baseValue, quoteValue],
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

  return (
    <Card className="w-full py-[20px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="px-[20px]">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="relative mb-[24px]">
                  <FormLabel className="!text-12 font-semibold">
                    Amount
                  </FormLabel>
                  <FormControl>
                    <AmountInput {...field} />
                  </FormControl>
                  <FormMessage className="absolute bottom-[-20px]" />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-[12px]">
              <FormField
                name="base"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="">From</FormLabel>
                    <FormControl>
                      <CurrencySelector
                        value={field.value}
                        onClick={() => openSelectCurrecyDialog(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SwitchCur />

              <FormField
                name="quote"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="">To</FormLabel>
                    <FormControl>
                      <CurrencySelector
                        value={field.value}
                        onClick={() => openSelectCurrecyDialog(field.name)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </form>
      </Form>
      <CurrencySelectorDialog
        currentValue={dialogSelectedCurrency}
        opened={currencySelectorDialogOpened}
        onOpenChange={setCurrencySelectorDialogOpened}
        onSetValue={onChangeCurrencyValue}
      />
    </Card>
  );
};

export default ConvertForm;
