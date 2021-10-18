import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getExchangeRates } from '../../redux/exchangeRates/exchangeRatesSelectors';
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import sprite from '../../utils/sprite.svg';
import s from './CurrencyConverter.module.css';
import calcExchRate from '../../utils/calcExchRate';

const CurrencyConverter = () => {
  const exchangeRates = useSelector(getExchangeRates);
  const [fromCurrency, setFromCurrency] = useState(exchangeRates[0].ccy);
  const [toCurrency, setToCurrency] = useState(exchangeRates[0].base_ccy);
  const [exchRate, setExchRate] = useState(exchangeRates[0].buy);
  const [fromAmount, setFromAmount] = useState(1000);
  const [toAmount, setToAmount] = useState(1000 * exchRate);

  useEffect(() => {
    setExchRate(
      calcExchRate({
        exchangeRates: exchangeRates,
        fromCurrency: fromCurrency,
        toCurrency: toCurrency,
      }),
    );
  }, [fromCurrency, toCurrency]); /* eslint-disable-line*/

  useEffect(() => {
    setToAmount(Math.round(fromAmount * exchRate * 100) / 100);
  }, [exchRate]); /* eslint-disable-line*/

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
        <CurrencyRow
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
        <CurrencyRow
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
