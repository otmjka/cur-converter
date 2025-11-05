import type { ReactNode } from 'react';
import { z } from 'zod';

export interface FormProviderProps {
  children: ReactNode;
}

export const converterFormSchema = z.object({
  amount: z.string(),
  // .regex(/^\d*([.,]\d*)?$/, 'Enter required amount')
  // .transform((val) => parseFloat(val.replace(',', '.')))
  // .refine((val) => !isNaN(val), 'required'),
  base: z.string(),
  quote: z.string(),
});

export type ConverterFormValues = z.infer<typeof converterFormSchema>;
