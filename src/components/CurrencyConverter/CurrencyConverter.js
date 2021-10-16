import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getExchangeRates } from '../../redux/exchangeRates/exchangeRatesSelectors';
import Currency from '../Currency/Currency';
import sprite from '../../utils/sprite.svg';
import s from './CurrencyConverter.module.css';

const CurrencyConverter = () => {
  const exchangeRates = useSelector(getExchangeRates);
  const [fromCurrency, setFromCurrency] = useState(exchangeRates[0].ccy);
  const [toCurrency, setToCurrency] = useState(exchangeRates[0].base_ccy);
  const [exchRate, setExchRate] = useState(exchangeRates[0].buy);
  const [fromAmount, setFromAmount] = useState(1000);
  const [toAmount, setToAmount] = useState(1000 * exchRate);

  useEffect(() => {
    setToAmount(Math.round(fromAmount * exchRate * 100) / 100);
  }, [exchRate]); /* eslint-disable-line*/

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setExchRate(1);
      return;
    }
    if (fromCurrency === 'UAH' && toCurrency === 'BTC') {
      setExchRate(getCrossRateUahBtc());
      return;
    }
    if (
      (fromCurrency === 'EUR' || fromCurrency === 'RUR') &&
      toCurrency === 'BTC'
    ) {
      setExchRate(getCrossRateEurOrRuRtoBtc());
      return;
    }
    if (fromCurrency === 'BTC' && toCurrency === 'UAH') {
      setExchRate(getCrossRateBtcUah());
      return;
    }
    if (
      fromCurrency === 'BTC' &&
      (toCurrency === 'EUR' || toCurrency === 'RUR')
    ) {
      setExchRate(getCrossRateBtcToEurOrRuR());
      return;
    }

    if (
      fromCurrency !== 'UAH' &&
      toCurrency !== 'UAH' &&
      fromCurrency !== 'BTC' &&
      toCurrency !== 'BTC'
    ) {
      setExchRate(getCrossRate());
      return;
    }

    exchangeRates.forEach(obj => {
      if (fromCurrency === obj.ccy && toCurrency === obj.base_ccy) {
        setExchRate(obj.buy);
      }
      if (fromCurrency === obj.base_ccy && toCurrency === obj.ccy) {
        setExchRate(1 / obj.sale);
      }
    });
  }, [fromCurrency, toCurrency]); /* eslint-disable-line*/

  function getCrossRate() {
    const toUAH = exchangeRates.find(obj => fromCurrency === obj.ccy).buy;
    const uahToCur = exchangeRates.find(obj => toCurrency === obj.ccy).sale;
    return toUAH / uahToCur;
  }
  function getCrossRateUahBtc() {
    const toUSD = exchangeRates.find(obj => obj.ccy === 'USD').sale;
    const toBTC = exchangeRates.find(obj => obj.ccy === 'BTC').sale;
    return 1 / toUSD / toBTC;
  }
  function getCrossRateEurOrRuRtoBtc() {
    const toUAH = exchangeRates.find(obj => fromCurrency === obj.ccy).buy;
    const toUSD = exchangeRates.find(obj => obj.ccy === 'USD').sale;
    const toBTC = exchangeRates.find(obj => obj.ccy === 'BTC').sale;
    return toUAH / toUSD / toBTC;
  }
  function getCrossRateBtcUah() {
    const toUSD = exchangeRates.find(obj => obj.ccy === 'BTC').buy;
    const toUAH = exchangeRates.find(obj => obj.ccy === 'USD').buy;
    return 1 * toUSD * toUAH;
  }

  function getCrossRateBtcToEurOrRuR() {
    const toUAH = getCrossRateBtcUah();
    const toCur = exchangeRates.find(obj => toCurrency === obj.ccy).sale;
    return toUAH / toCur;
  }

  function onClickReverse() {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }

  function handleChangeFromAmount(e) {
    setFromAmount(Math.round(e.target.value * 100) / 100);
    setToAmount(Math.round(e.target.value * exchRate * 100) / 100);
  }

  function handleChangeToAmount(e) {
    setToAmount(Math.round(e.target.value * 100) / 100);
    setFromAmount(Math.round((e.target.value / exchRate) * 100) / 100);
  }

  return (
    <div className="container">
      <div className={s.converter}>
        <Currency
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleChangeFromAmount}
        />
        <button className={s.btn} type="button" onClick={onClickReverse}>
          <svg className={s.icon}>
            <use href={sprite + '#icontransfer'} />
          </svg>
        </button>
        <Currency
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleChangeToAmount}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
