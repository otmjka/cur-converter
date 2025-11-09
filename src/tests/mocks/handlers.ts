import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    ({ request }) => {
      console.log(`processing api call:`);
      console.log(request.url);
      const url = new URL(request.url);
      const s = url.searchParams.get('s');
      if (s === 'mojito') return HttpResponse.json([]);
      return HttpResponse.json({
        drinks1: 'no data found',
      });
    },
  ),
];
