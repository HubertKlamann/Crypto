import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <section className="section">
      <h2 className="section__title">How It Works</h2>
      <p className="section__description">
        Our team member is committed to providing the highest level of service
        and support to our clients. With a passion for customer satisfaction and
        a deep understanding of the crypto markets, they are an invaluable asset
        to our team.
      </p>
      <div className="whole-shape">
        <div className="box"></div>
        <div className="arrow-right"></div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="bubble1">
          <div className="icon1" />
        </div>
        <div className="bubble2">
          <div className="icon2" />
        </div>
        <div className="bubble3">
          <div className="icon3" />
        </div>
        <div className="title-description1">
          <h2 className="title1">Create Account</h2>
          <p className="description1">
            Start trading now with our free inlimited demo account
          </p>
        </div>
        <div className="title-description2">
          <h2 className="title2">Find your Credit</h2>
          <p className="description2">
            Buying bitcoin or cryptocurrencies with a credit card
          </p>
        </div>
        <div className="title-description3">
          <h2 className="title3">Exchange Currency</h2>
          <p className="description3">
            Calculate, Exchange currency & earn money with secure trading
            platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
