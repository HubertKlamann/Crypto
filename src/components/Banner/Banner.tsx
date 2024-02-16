import './scss/Banner.scss';
import bannerImg from './bannerimg.png';
import polygonImg from './polygon.png';
import bitpandaImg from './bitpanda.png';
import coindeskImg from './coindesk.png';
import tronImg from './tron.png';
import mapboxImg from './mapbox.png';
import Button from '../Button/Button';
import PlayIcon from '../../playButton';

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        <h1>
          Join the <span>Crypto</span> Revolution Start <span>Trading</span>{' '}
          Today
        </h1>
        <p>
          The crypto trading revolution has transformed the way we invest,
          trade, and store value. With its decentralized and transparent nature,
          cryptocurrencies offer a more secure and accessible alternative to
          traditional financial systems.
        </p>
      </div>

      <img src={bannerImg} alt="Screen" />
      <div className="banner__buttons">
        <Button type="square">Get Started</Button>
        <Button type="transparent" Icon={PlayIcon}>
          How it work
        </Button>
      </div>

      <div className="banner__partners">
        <div>
          <img src={polygonImg} alt="" />
        </div>
        <div>
          <img src={bitpandaImg} alt="" />
        </div>
        <div>
          <img src={coindeskImg} alt="" />
        </div>
        <div>
          <img src={tronImg} alt="" />
        </div>
        <div>
          <img src={mapboxImg} alt="" />
        </div>
      </div>
    </div>
  );
};
