const BASE_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const apiGetRates = () => {
  return fetch(`${BASE_URL}`).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error('No exchange rates found'));
  });
};
