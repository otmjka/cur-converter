import { z } from 'zod';
import { currencyValidation } from '@/shared/lib/currency';

export const converterFormSchema = z.object({
  amount: z
    .string()
    .refine(currencyValidation.isNumeric, 'Please enter a valid number')
    .refine(currencyValidation.isPositive, 'Amount must be greater than 0'),

  base: z.string(),
  quote: z.string(),
});
