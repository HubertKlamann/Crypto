import { useEffect, useState } from 'react';
import './header.scss';
import classNames from 'classnames';

export const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsChecked(false);
        document.body.classList.remove('navigation--checked');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCheckbox = () => {
    setIsChecked((current) => !current);
    document.body.classList.toggle('navigation--checked', !isChecked);
  };

  return (
    <header className="header">
      <nav
        className={classNames(['navigation'], {
          'navigation--visible': isChecked,
        })}
      >
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Home
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              About Us
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Services
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Cryptocurrencies
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              News
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <label className="navigation__label">
        <input
          type="checkbox"
          className="navigation__input"
          checked={isChecked}
          onChange={handleCheckbox}
        />
      </label>
    </header>
  );
};
