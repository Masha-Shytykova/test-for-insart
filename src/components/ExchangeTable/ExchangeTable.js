import { useSelector } from 'react-redux';
import {
  getExchangeRates,
  getIsLoading,
} from '../../redux/exchangeRates/exchangeRatesSelectors';

import s from './ExchangeTable.module.css';

const ExchangeTable = () => {
  const exchangeRates = useSelector(getExchangeRates);
  const isLoading = useSelector(getIsLoading);

  return (
    <div className="container">
      {isLoading ? (
        <h3 className="message">Loading... </h3>
      ) : (
        <>
          <table className={s.table}>
            <thead>
              <tr className={s.thead}>
                <th className={s.thText}>Exchange rates</th>
                <th className={s.thText}>Buy</th>
                <th className={s.thText}>Sell</th>
              </tr>
            </thead>
            <tbody>
              {exchangeRates.map(({ ccy, base_ccy, buy, sale }) => (
                <tr key={ccy}>
                  <td className={s.tdText}>
                    {ccy} / {base_ccy}
                  </td>
                  <td className={s.tdText}>{buy}</td>
                  <td className={s.tdText}>{sale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ExchangeTable;
