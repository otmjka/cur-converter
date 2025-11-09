import { type FC } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form';
import { Card, CardContent } from '@/shared/components/ui/card';
import {
  CurrencySelector,
  CurrencySelectorDialog,
  SwitchCur,
} from '@/shared/UiKit';
import { AmountInput } from '@/shared/UiKit/Form';

import useConvertFormController from './useConvertFormController';
import type { ConvertFormState } from './types';

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
    value: state.value,
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
            <div className="flex flex-col xs:flex-row xs:gap-[12px] items-center">
              <FormField
                name="base"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1 w-full xs:w-auto">
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
                  <FormItem className="flex-1 w-full xs:w-auto">
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
