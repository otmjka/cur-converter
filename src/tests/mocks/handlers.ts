import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('', ({ request }) => {
    const url = new URL(request.url);
    const s = url.searchParams.get('s');
    if (s === 'mojito') return HttpResponse.json([]);
    return HttpResponse.json({
      drinks1: 'no data found',
    });
  }),
];
