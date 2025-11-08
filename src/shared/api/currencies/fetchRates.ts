import apiUrls from '../apiUrls';
import type { RatesResponse } from './types';

export const fetchRates = async (pair: {
  base: string;
  quote: string;
}): Promise<RatesResponse> => {
  const { base, quote } = pair;
  console.log(`fetchRates::: ${base} ${quote}`);
  const response = await fetch(
    `${apiUrls.fetchRates}?base=${base}&currencies=${quote}`,
  );

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data: RatesResponse = await response.json();

  return data;
};
