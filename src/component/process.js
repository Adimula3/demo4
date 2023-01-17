import React, {useState} from "react";
import '../styles/process.css';
import {Col, Row} from "react-bootstrap";
import tradeImg from '../assets/img_1.png';
import {Link, NavLink} from "react-router-dom";
import visa from '../assets/visa.svg';
import logo from '../assets/vexiCodePro.svg';
import illustartion1 from '../assets/Make it rain-pana.svg';
import currency from '../assets/currency.jpg';

const Process = () => {

    const [visible, setVisible] =useState(true);
  return (
      <>
          <div className="Process">
              <h1>Welcome to veximo</h1>
              <Row>
                  <Col lg={8}>

                  </Col>
                  <Col lg={4}>
                      <div className="p-message">
                          <p>We have the best rates.Simply start your exchange right now.Sign
                              up for our referral program and earn commission from each referral.
                              The earnings are credited into your account in cryptocurrencies.
                              Register now to get started</p>

                          <button className="btn btn-dark play animate__bounceIn">Get Started</button>
                      </div>

                  </Col>
              </Row>
              <section className="trade">
                  <Row>
                      <Col lg={6}>
                          <img className="trade-image" src={tradeImg} alt="" />
                      </Col>
                      <Col lg={6}>
                          <div className="trade-msg">
                              <h1>Limitless crypto exchange</h1>
                              <p>Fast,simple, non-custodial Exchange Services
                                  we supports a wide range of cryptocurrencies,
                                  including Bitcoin, Ethereum, Litecoin, and USDT and
                                  with our reliable user-friendly platform for buying and selling
                                  cryptocurrencies.
                              </p>
                                <div className="trade-buttons d-flex">
                                    <button className="btn btn-dark  animate__bounceIn">Exchange</button>
                                    <button className="btn btn-dark  animate__bounceIn">video</button>
                                </div>
                          </div>

                      </Col>
                  </Row>
              </section>
          </div>

          <section className="payment-options">
              <Row>
                  <Col lg={7}>
                      <h1>Easy and quick deposits and withdrawals</h1>
                      <div className="payments d-flex">
                          <div className="payment-method-visa" >
                              <img src={visa} alt="" className="visa"/>
                              <p>Visa</p>
                          </div>

                          <div className="payment-method-vexi">
                              <img src={logo} alt="" className="logo"/>
                              <p>Vexi Code Pro</p>
                          </div>
                      </div>
                      <div className="veximo-code-content">
                          <h4>Veximo Code PRO</h4>
                          <p>Veximo Code is a tool to transfer assets between user accounts on Kuna exchange
                              Veximo Code also allows the storage or transfer of any asset outside of the exchange,
                              including exchangers.</p>
                          <div className="payment-buttons d-flex">
                              <button className="btn btn-primary">Deposit</button>
                              <button className="btn btn-light-purple">Withdrawal</button>
                          </div>
                      </div>
                  </Col>
                  <Col lg={5}>
                      <img src={illustartion1} alt=""  className="pay-img"/>
                  </Col>
                  <div className=" dope d-flex">
                      <hr></hr>
                      <p>im good to go </p>
                      <hr></hr>
                  </div>

              </Row>

          </section>
      </>
  );
}
export default Process;
