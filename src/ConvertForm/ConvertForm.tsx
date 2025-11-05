import { useCallback, type FC } from 'react';
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
import { Input } from '@/components/ui/input';
import { CurrencySelector, SwitchCur } from '@/UiKit';

const ConvertForm: FC = () => {
  const form = useForm<ConverterFormValues>({
    resolver: zodResolver(converterFormSchema),
    defaultValues: {
      amount: '1',
      base: 'USD',
      quote: 'EUR',
    },
  });

  const onSubmit = useCallback((data: ConverterFormValues) => {
    console.log(data);
  }, []);

  return (
    <Card className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="1000.25" {...field} />
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
                  <FormItem className="mb-5">
                    <FormLabel htmlFor="">From</FormLabel>
                    <FormControl>
                      <CurrencySelector
                        value={field.value}
                        onChange={field.onChange}
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
                  <FormItem className="mb-5">
                    <FormLabel htmlFor="">To</FormLabel>
                    <FormControl>
                      <CurrencySelector
                        value={field.value}
                        onChange={field.onChange}
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
    </Card>
  );
};

export default ConvertForm;
