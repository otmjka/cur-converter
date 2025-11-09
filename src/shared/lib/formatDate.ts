export const formatDate = (timestamp?: number) => {
  if (typeof timestamp !== 'number') {
    return '';
  }
  const date = new Date(timestamp * 1000);
  const formatted = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
  return formatted;
};
