import './services.scss';

export function Services() {
  return (
    <div className="services">
      <h2 className="section__title">Our Services</h2>
      <h3 className="section_description">
        Explore our range of cryptocurrency services and take advantage of the
        benefits of the digital currency revolution
      </h3>
      <div className="boxes">
        <div className="boxes_item">
          <div className="icon1"></div>
          <h4>Cryptocurrency trading</h4>
          <p>
            Our cryptocurrency trading platform is designed for both novice and
            experienced traders, offering a range of tools and features to help
            users maximize their profits. With 24/7 support and advanced
            security measures, users can trade with confidence and peace of
            mind.
          </p>
          <div className="left_arrow"></div>
        </div>
        <div className="boxes_item is-active">
          <div className="icon2"></div>
          <h4>Secure Wallet</h4>
          <p>
            Our secure cryptocurrency wallet is designed to prioritize user
            security and Privacy. With easy-to-use features and a streamlined
            interface, users can access their digital assets quickly and
            securely, from anywhere in the world.
          </p>
          <div className="left_arrow"></div>
        </div>
        <div className="boxes_item">
          <div className="icon3"></div>
          <h4>Safe And Secure</h4>
          <p>
            Our safe and secure cryptocurrency is designed with user privacy and
            security in mind. With advanced authentication and multi-factor
            verification processes, users can enjoy complete control over their
            digital assets without compromising on security.
          </p>
          <div className="left_arrow"></div>
        </div>
        <div className="boxes_item">
          <div className="icon4"></div>
          <h4>Cryptocurrency Mining</h4>
          <p>
            Our cryptocurrency mining services are designed to maximize
            profitability while minimizing costs. With low electricity rates and
            advanced mining algorithms, users can earn more cryptocurrency with
            less energy consumption and equipment maintenance.
          </p>
          <div className="left_arrow"></div>
        </div>
      </div>
    </div>
  );
}
