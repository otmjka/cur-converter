import { type FC } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';

import { CurrencySelector, CurrencySelectorDialog, SwitchCur } from '@/UiKit';
import { AmountInput } from '@/UiKit/Form';
import useConvertFormController from './useConvertFormController';
import type { ConvertFormState } from '@/shared/types';

const ConvertForm: FC<{ state: ConvertFormState }> = ({ state }) => {
  const {
    form,
    onSubmit,
    openSelectCurrecyDialog,
    dialogSelectedCurrency,
    currencySelectorDialogOpened,
    setCurrencySelectorDialogOpened,
    onChangeCurrencyValue,
  } = useConvertFormController({
    onChange: state.onChange,
  });

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
