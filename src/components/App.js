import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExchRates } from '../redux/exchangeRates/exchangeRatesOperations';
import { getExchangeRates } from '../redux/exchangeRates/exchangeRatesSelectors';
import { getRequestCounter } from '../redux/requestCounter/requestCounterSelectors';
import { increaseRequestCounter } from '../redux/requestCounter/requestCounterActions';

import ExchangeTable from './ExchangeTable/ExchangeTable';
import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function App() {
  const dispatch = useDispatch();
  const exchangeRates = useSelector(getExchangeRates);
  const requestCounter = useSelector(getRequestCounter);

  useEffect(() => {
    if (exchangeRates.length > 0) {
      return;
    }
    dispatch(getExchRates());
    dispatch(increaseRequestCounter());
  }, [dispatch]); /* eslint-disable-line*/

  return (
    <>
      <Header />
      {/* {isLoading && <LoaderSpinner />} */}
      {requestCounter === 5 && (
        <div className="container">
          <h4 className="message">
            You have exceeded the allowed number of requests, try using the
            service a little later
          </h4>
        </div>
      )}
      {/* {exchangeRates.length === 0 && (
        <h3 className="message">
          Currency rates are currently unknown. Try to use the service a little
          later
        </h3>
      )} */}
      {exchangeRates.length > 0 && requestCounter < 5 && (
        <>
          <ExchangeTable /> <CurrencyConverter />
        </>
      )}
      <Footer />
    </>
  );
}
