/* eslint-disable react/prop-types */
import { ChartData } from '../../types/ChartData';
import LineChart from '../LineChart/LineChart';
import './scss/CryptoCard.scss';
import ripple from './ripple.png';
import ethereum from './etherum.png';
import bitcoin from './bitcoin.png';
import litecoin from './litecoin.png';
import dogecoin from './dogecoin.png';
import solana from './solana.png';

const currencyImages: Record<string, string> = {
  ripple,
  ethereum,
  bitcoin,
  litecoin,
  dogecoin,
  solana,
};

type Props = {
  currency: string;
  marketCaps: [number, number][];
};

export const CryptoCard: React.FC<Props> = ({ currency, marketCaps }) => {
  const value = marketCaps[marketCaps.length - 1][1];
  const difference = marketCaps[marketCaps.length - 1][1] - marketCaps[0][1];
  const differencePercent =
    marketCaps[marketCaps.length - 1][1] / marketCaps[0][1];

  return (
    <div className="card">
      <h3>
        <img src={currencyImages[currency]} alt="Currency" height={'30px'} />
        {currency}
      </h3>
      <div className="card__price">
        <p>$ {value.toFixed(2)}</p>
        <span className={+differencePercent > 1 ? 'green' : 'red'}>
          {+differencePercent > 1 && '+'}
          {`${(+differencePercent - 1).toFixed(2)} %`}
        </span>
      </div>

      <div className="card__change">
        <span className={difference >= 0 ? 'bggreen' : 'bgred'}>
          {difference >= 0 && '+ '}
          {`${difference.toFixed(2)} $`}
        </span>
        <p>Last 24h</p>
      </div>

      <LineChart data={marketCaps} />
    </div>
  );
};
