import { ChangeEvent, useState, useCallback, useMemo, useEffect } from 'react';
import './calculator.scss';
import Button from '../Button/Button';

interface ExchangeRates {
  [key: string]: {
    [key: string]: number;
  };
}

export function Calculator() {
  const [from, setFrom] = useState('bitcoin');
  const [to, setTo] = useState('ethereum');
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const exchangeRates: ExchangeRates = useMemo(
    () => ({
      bitcoin: {
        ethereum: 0.05,
        cardano: 10,
        solana: 0.1,
      },
      ethereum: {
        bitcoin: 20,
        cardano: 200,
        solana: 2,
      },
      cardano: {
        bitcoin: 1,
        ethereum: 0.05,
        solana: 0.1,
      },
      solana: {
        bitcoin: 1,
        ethereum: 0.05,
        cardano: 10,
      },
    }),
    []
  );

  const cryptoCurrencies = Object.keys(exchangeRates);

  const handleFromChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTo(event.target.value);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(event.target.value);

    setAmount(() => {
      const fromRate = exchangeRates[from];

      if (fromRate && typeof fromRate[to] === 'number') {
        const rate = fromRate[to];
        setResult(newAmount * rate);
      } else {
        setResult(null);
      }

      return isNaN(newAmount) ? 0 : newAmount;
    });
  };

  const handleCalculate = useCallback(() => {
    const fromRate = exchangeRates[from];

    if (fromRate && typeof fromRate[to] === 'number') {
      const rate = fromRate[to];
      setResult(amount * rate);
    } else {
      setResult(null);
    }
  }, [from, to, amount, exchangeRates]);

  const handleReplace = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    handleCalculate();
  }, [from, to, amount, exchangeRates, handleCalculate]);

  return (
    <div className="calculator">
      <h2 className="section_title">Cryptocurrency Calculator</h2>

      <div className="calc_selectors">
        <div className="calc_selectors--item">
          <p>FROM</p>
          <select
            title="calcFrom"
            className="calc_selectors--select"
            onChange={handleFromChange}
            value={from}
          >
            {cryptoCurrencies.map((name) => (
              <option key={name} value={name} className="transparent_option">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="button_wrapper">
          <button
            title="replace"
            className="replace_button"
            onClick={handleReplace}
          ></button>
        </div>

        <div className="calc_selectors--item">
          <p>TO</p>
          <select
            title="calcTo"
            className="calc_selectors--select"
            onChange={handleToChange}
            value={to}
          >
            {cryptoCurrencies.map((name) => (
              <option key={name} value={name} className="transparent_option">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="calc_input">
        <label htmlFor="amount" className="hidden-label">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          max="1000"
          placeholder="Enter the amount"
          onChange={handleAmountChange}
        />
        <Button type="square">Calculate</Button>
      </div>
      <div className="calc_result">
        <h3>COVERT RESULT</h3>
        {result !== null ? (
          <p>{`${amount} ${from.toUpperCase()} = ${result.toFixed(
            3
          )} ${to.toUpperCase()}`}</p>
        ) : (
          <p>Conversion rate not available</p>
        )}
      </div>
    </div>
  );
}
