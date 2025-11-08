export const getRateQueryKey = (pair: { base: string; quote: string }) => [
  'rate',
  pair.base,
  pair.quote,
];
