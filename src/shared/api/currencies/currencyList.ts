import apiUrls from '../apiUrls';
import type { CurrencyListResponse } from './types';

export const currencyList = async (): Promise<CurrencyListResponse> => {
  const response = await fetch(`${apiUrls.currencyList}`);
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  const data = await response.json();
  return data;
};
