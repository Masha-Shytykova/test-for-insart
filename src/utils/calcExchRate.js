export default function calcExchRate({
  exchangeRates,
  fromCurrency,
  toCurrency,
}) {
  if (fromCurrency === toCurrency) {
    return 1;
  }
  if (fromCurrency === 'UAH' && toCurrency === 'BTC') {
    return getCrossRateUahBtc({ exchangeRates });
  }
  if (
    (fromCurrency === 'EUR' || fromCurrency === 'RUR') &&
    toCurrency === 'BTC'
  ) {
    return getCrossRateEurOrRuRtoBtc({ exchangeRates, fromCurrency });
  }
  if (fromCurrency === 'BTC' && toCurrency === 'UAH') {
    return getCrossRateBtcUah({ exchangeRates });
  }
  if (
    fromCurrency === 'BTC' &&
    (toCurrency === 'EUR' || toCurrency === 'RUR')
  ) {
    return getCrossRateBtcToEurOrRuR({ exchangeRates, toCurrency });
  }

  if (
    fromCurrency !== 'UAH' &&
    toCurrency !== 'UAH' &&
    fromCurrency !== 'BTC' &&
    toCurrency !== 'BTC'
  ) {
    return getCrossRate({ exchangeRates, fromCurrency, toCurrency });
  }

  if (
    exchangeRates.find(
      obj => fromCurrency === obj.ccy && toCurrency === obj.base_ccy,
    )
  ) {
    return exchangeRates.find(
      obj => fromCurrency === obj.ccy && toCurrency === obj.base_ccy,
    ).buy;
  }

  if (
    exchangeRates.find(
      obj => fromCurrency === obj.base_ccy && toCurrency === obj.ccy,
    )
  ) {
    return (
      1 /
      exchangeRates.find(
        obj => fromCurrency === obj.base_ccy && toCurrency === obj.ccy,
      ).sale
    );
  }
}

function getCrossRate({ exchangeRates, fromCurrency, toCurrency }) {
  const toUAH = exchangeRates.find(obj => fromCurrency === obj.ccy).buy;
  const uahToCur = exchangeRates.find(obj => toCurrency === obj.ccy).sale;
  return toUAH / uahToCur;
}
function getCrossRateUahBtc({ exchangeRates }) {
  const toUSD = exchangeRates.find(obj => obj.ccy === 'USD').sale;
  const toBTC = exchangeRates.find(obj => obj.ccy === 'BTC').sale;
  return 1 / toUSD / toBTC;
}
function getCrossRateEurOrRuRtoBtc({ exchangeRates, fromCurrency }) {
  const toUAH = exchangeRates.find(obj => fromCurrency === obj.ccy).buy;
  const toUSD = exchangeRates.find(obj => obj.ccy === 'USD').sale;
  const toBTC = exchangeRates.find(obj => obj.ccy === 'BTC').sale;
  return toUAH / toUSD / toBTC;
}
function getCrossRateBtcUah({ exchangeRates }) {
  const toUSD = exchangeRates.find(obj => obj.ccy === 'BTC').buy;
  const toUAH = exchangeRates.find(obj => obj.ccy === 'USD').buy;
  return 1 * toUSD * toUAH;
}

function getCrossRateBtcToEurOrRuR({ exchangeRates, toCurrency }) {
  const toUAH = getCrossRateBtcUah();
  const toCur = exchangeRates.find(obj => toCurrency === obj.ccy).sale;
  return toUAH / toCur;
}
