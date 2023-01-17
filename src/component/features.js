import React from "react";
import '../styles/Features.css'
import support from '../assets/need-help-g259691214_1920.png';
import support1 from '../assets/call-gb19a566bf_640.png';
import hand from '../assets/3e64bd0e-cc70-49d2-9320-b802b74f8018.png';
import {Col, Row} from "react-bootstrap";
const Features = () => {
  return (
      <>
          <div className="features">
              <Row>
                  <Col lg={6}>
                      <div className="features-img d-flex">
                          <h4 className="f1">24/7 Support</h4>
                          <div className="secure d-flex">
                              <img className="image1" src={support1} alt=""/>
                              <p className="p-1">At veximo,we prioritize the needs and concerns of our customers.
                                  That's why we offer 24/7 customer support to ensure that our users have
                                  access to assistance whenever they need it..</p>
                          </div>
                          <h4 className="f2">Secure</h4>
                          <div className="d-flex">
                              <p className="p-1">Advanced security measures to protect users' assets.
                                  these include two-factor authentication,
                                  secure storage of digital assets, and regular audits to ensure
                                  the platform is compliant with
                                  industry standards.</p>
                              <img className="image3" src={support} alt=""/>
                          </div>
                          <h4 className="f3">Best Rates</h4>
                          <div className="d-flex">
                              <img className="image3" src={support1} alt=""/>
                              <p className="p-1">We continuously monitor the prices of various cryptocurrencies
                                  and adjust our rates accordingly to ensure that our users are getting
                                  the most value for their trades. With our competitive exchange rates
                                  and a wide range of trading options, we make it easy for our users to buy,
                                  sell, and trade cryptocurrencies with confidence.".</p>
                          </div>

                      </div>
                  </Col>
                  <Col lg={6}>
                      <div className="features-msg">
                          <h1>Why Our Cryptocurrency Exchange is the Best Option</h1>
                          <p>At our crypto exchange, customer support is a top priority.
                              We understand that navigating the world of cryptocurrencies can be intimidating and confusing,
                              which is why we offer comprehensive support to help our users with any
                              questions or issues they may have.

                              In addition to our helpful support team, we prioritize security at our exchange.
                              We use state-of-the-art technology to ensure that our platform is secure and that our users' assets are protected.

                              We are also committed to offering the best rates on the market.
                              We regularly compare our prices to other exchanges to make sure that our
                              users are getting the best value for their trades.

                              Whether you're a seasoned crypto trader or new to the world of digital currencies,
                              we are here to help you every step of the way. So why wait? Start trading with us today
                              and experience the best in customer support, security, and rates.</p>

                          <button className="btn btn-dark play animate__bounceIn">Get Started</button>
                      </div>
                  </Col>
              </Row>
          </div>

          <section className="giftCards">
              <p className="g-head">You can buy cryptocurrencies using gift cards,
                  your investment options are limitless. No longer are you limited to using traditional payment methods!</p>
              <div className="gift-card">
                  <Row>
                      <Col lg={6}>
                          <img src={hand} alt="" />
                      </Col>
                      <Col lg={6}>
                          <p>At our exchange, we are pleased to offer the convenience of using gift cards to purchase
                              your favorite cryptocurrencies. Simply add your gift card as a payment method in your
                              account and you'll be able to use it to buy the cryptocurrency of your choice.
                              Our gift cards can be redeemed for any of the cryptocurrencies we offer,
                              giving you flexibility and control over your investment decisions.
                              Plus, with the ability to use your gift card to buy cryptocurrency,
                              you can easily give the gift of crypto to friends and loved ones.
                              We hope you enjoy this added feature and the convenience it brings
                              to your cryptocurrency purchases on our exchange</p>
                      </Col>
                  </Row>
              </div>
          </section>

          <section className="subscription bg-white">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="subscription-wrapper">
                              <div className="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                                  <h3 className="flex-fill">Subscribe <br/> to our newsletter</h3>
                                  <form action="#" className="row flex-fill">
                                      <div className="col-lg-7 my-md-2 my-2">
                                          <input type="email"
                                                 className="form-control px-4 border-0 w-100 text-center text-md-left"
                                                 id="email" placeholder="Your Email" name="email"/>
                                      </div>
                                      <div className="col-lg-5 my-md-2 my-2">
                                          <button type="submit"
                                                  className="btn btn-primary btn-lg border-0 w-100">Subscribe Now
                                          </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </>
  );
}
export default Features;
