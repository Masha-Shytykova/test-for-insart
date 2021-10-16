// export async function apiGetRates() {
//   try {
//       const { data } = await axios.get("/project");
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

const BASE_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

// export async function apiGetRates() {
//   try {
//     const { data } = await fetch(`${BASE_URL}`);
//     // console.log(data.json());
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

export const apiGetRates = () => {
  return fetch(`${BASE_URL}`).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Not found`));
  });
};
