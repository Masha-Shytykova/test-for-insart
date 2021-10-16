// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { getExchangeRates } from "../../redux/exchangeRates/exchangeRatesSelectors";
// import Currency from "../Currency/Currency";

// const CurrencyConverter = () => {
//   const exchangeRates = useSelector(getExchangeRates);
//   const [fromCurrency, setFromCurrency] = useState(exchangeRates[0].ccy);
//   const [toCurrency, setToCurrency] = useState(exchangeRates[0].base_ccy);
//   const [exchRate, setExchRate] = useState(exchangeRates[0].sale);
//   const [amount, setAmount] = useState(1);
//   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
 
//   let toAmount;
//   let fromAmount;
//   if (amountInFromCurrency) {
//     fromAmount = amount;
//     toAmount = amount * exchRate;
//   } else {
//     toAmount = amount;
//     fromAmount = amount / exchRate;
//   }
  
//   useEffect(() => {
//     if (fromCurrency === toCurrency) {
//       setExchRate(1);
//     }
//     exchangeRates.forEach((obj) => {
//       if (fromCurrency === obj.ccy && toCurrency === obj.base_ccy) {
//         setExchRate(obj.buy);

//         console.log(exchRate);
//       }
//       if (fromCurrency === obj.base_ccy && toCurrency === obj.ccy) {
//         setExchRate(obj.sale);
//         console.log(exchRate);
//       }
//     });
//   }, [fromCurrency, toCurrency]);

//   function handleFromAmountChange(e) {
//     setAmount(e.target.value);
//     setAmountInFromCurrency(true);
//   }

//   function handleToAmountChange(e) {
//     setAmount(e.target.value);
//     setAmountInFromCurrency(false);
//   }

//   return (
//     <>
//       <Currency
//         selectedCurrency={fromCurrency}
//         onChangeCurrency={(e) => setFromCurrency(e.target.value)}
//         amount={fromAmount}
//         onChangeAmount={handleFromAmountChange}
//       />
//       <div>=</div>
//       <Currency
//         selectedCurrency={toCurrency}
//         onChangeCurrency={(e) => setToCurrency(e.target.value)}
//         amount={toAmount}
//         onChangeAmount={handleToAmountChange}
//       />
//     </>
//   );
// };

// export default CurrencyConverter;
