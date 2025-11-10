export const parseCurrency = (value: string) => {
  const normalizedValue = value.replace(',', '.');
  const numberValue = parseFloat(normalizedValue);
  return numberValue;
};

export const currencyValidation = {
  isNumeric: (value: string) => {
    if (!/^\d*([,.]\d*)?$/.test(value)) {
      return false;
    }
    const numberValue = parseCurrency(value);
    return !isNaN(numberValue) && isFinite(numberValue);
  },

  isPositive: (value: string) => parseCurrency(value) > 0,

  hasMaxDecimals: (value: string, maxDecimals: number = 2) => {
    const normalizedValue = value.replace(',', '.');
    const parts = normalizedValue.split('.');
    return parts.length === 1 || parts[1].length <= maxDecimals;
  },
};
