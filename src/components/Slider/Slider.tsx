import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import './scss/Slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { CryptoCard } from '../CryptoCard/CryptoCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Slider: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const [currencies, setCurrencies] =
    useState<Record<string, [number, number][]>>();

  const APIKEY = '&x_cg_demo_api_key=CG-cx2Lfu4AWhCnnsvRsMj7B1zP';

  useEffect(() => {
    const fetchCurrencyPrice = (id: string) =>
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&api_key=${APIKEY}
  `);

    const currencyIds = [
      'ripple',
      'ethereum',
      'bitcoin',
      'solana',
      'litecoin',
      'dogecoin',
    ];

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          currencyIds.map((id) => fetchCurrencyPrice(id))
        );

        const currenciesData: Record<string, [number, number][]> = {};
        responses.forEach((response, index) => {
          const currencyId = currencyIds[index];
          const prices = response.data['prices'].filter(
            (_: unknown, index: number) => {
              if (
                index === 0 ||
                index % 4 === 0 ||
                index === response.data['prices'].length - 1
              ) {
                return true;
              } else {
                return false;
              }
            }
          );
          currenciesData[currencyId] = prices;
        });
        setCurrencies(currenciesData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const slidesAmount = {
    desktop: 4,
    tablet: 3,
    mobile: 1,
  };

  const updateSlidesPerView = () => {
    if (swiper && swiper.params) {
      const width = window.innerWidth;

      if (width >= 1300) {
        swiper.params.slidesPerView = slidesAmount.desktop;
      } else if (width >= 950) {
        swiper.params.slidesPerView = slidesAmount.tablet;
      } else {
        swiper.params.slidesPerView = slidesAmount.mobile;
      }

      swiper.update();
    }
  };

  useEffect(() => {
    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, [swiper]);

  return (
    <section className="slider__container">
      <h2>
        Real time popular <span>Cryptocurrency</span>
      </h2>
      <p>
        Real-time popular cryptocurrencies offer users the ability to track the
        value of digital assets
        <br />
        as they rise and fall in real-time. With this information, traders and
        investors can make
        <br />
        informed decisions about when to buy, sell, or hold their crypto assets.
      </p>

      <div className="slider">
        <button onClick={() => swiper && swiper.slidePrev()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            fill="white"
            viewBox="0 0 512 512"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
          </svg>
        </button>

        <Swiper
          className="swiper"
          onSwiper={(swiperInstance: SwiperClass) => setSwiper(swiperInstance)}
          spaceBetween={40}
          slidesPerView={4}
        >
          {' '}
          {currencies &&
            Object.keys(currencies).map((currencyId) => {
              return (
                <SwiperSlide key={currencyId} className="swiper__slide">
                  <CryptoCard
                    currency={currencyId}
                    marketCaps={currencies[currencyId]}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button onClick={() => swiper && swiper.slideNext()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={40}
            fill="white"
            viewBox="0 0 512 512"
          >
            <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </button>
      </div>
    </section>
  );
};
