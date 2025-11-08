import apiUrls from '../apiUrls';
import type { CurrencyListResponse } from './types';

export const currencyList = async (): Promise<{
  data?: CurrencyListResponse;
  error?: Error;
}> => {
  try {
    const response = await fetch(`${apiUrls.currencyList}`);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error as unknown as Error };
  }
};
