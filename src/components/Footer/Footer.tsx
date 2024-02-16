import './footer.scss';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__articles--main">
          <h4>EONCOIN</h4>
          <p>
            Cryptocurrencies. A new way to make
            <br />
            the payment easy reliable and 100% secure.
          </p>
          <ul>
            <li>
              <button
                type="button"
                title="Facebook"
                className="social__media--facebook"
              ></button>
            </li>
            <li>
              <button
                type="button"
                title="Twitter"
                className="social__media--twitter"
              ></button>
            </li>
            <li>
              <button
                type="button"
                title="Instagram"
                className="social__media--instagram"
              ></button>
            </li>
            <li>
              <button
                type="button"
                title="Linkedin"
                className="social__media--linkedin"
              ></button>
            </li>
          </ul>
        </div>
        <div className="footer__articles">
          <div className="footer__article">
            <h4>Cryptocurrency</h4>
            <ul>
              <li>
                <a href="/">Calculate</a>
              </li>
              <li>
                <a href="/">Benefits</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Security</a>
              </li>
            </ul>
          </div>
          <div className="footer__article">
            <h4>Service</h4>
            <ul>
              <li>
                <a href="/">Card information</a>
              </li>
              <li>
                <a href="/">Easy Transaction</a>
              </li>
              <li>
                <a href="/">Money Analysis</a>
              </li>
              <li>
                <a href="/">System & Condition</a>
              </li>
            </ul>
          </div>
          <div className="footer__article">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Developer Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyrights">
        <p>Copyright @ 2023 Crypto. All rights reserved..</p>
        <p>Privacy Policy terms & Conditions</p>
      </div>
    </div>
  );
}
