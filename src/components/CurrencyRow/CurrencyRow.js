import { useSelector } from 'react-redux';
import { getExchangeRates } from '../../redux/exchangeRates/exchangeRatesSelectors';

import s from './CurrencyRow.module.css';

const CurrencyRow = ({
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  const exchangeRates = useSelector(getExchangeRates);

  const currencyList = [
    ...new Set([
      ...exchangeRates.map(({ ccy }) => ccy),
      ...exchangeRates.map(({ base_ccy }) => base_ccy),
    ]),
  ];

  return (
    <div>
      <input
        type="number"
        className={s.input}
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        className={s.select}
      >
        {currencyList.map(ccy => (
          <option key={ccy} value={ccy}>
            {ccy}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
