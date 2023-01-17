import React from "react";
import {Col, Row} from "react-bootstrap";
import "../styles/home.css";
import bit from '../assets/bitcoin-svgrepo-com.svg';
import Eth from '../assets/eth-svgrepo-com.svg';
import Usdt from '../assets/usdt-alt-svgrepo-com.svg';
import lte from '../assets/icons8-litecoin.svg';
import Process from "../component/process";
import GoogleIcon from '../assets/google_logo_icon.png';
import c1 from '../assets/squircle.svg';
import c2 from '../assets/squircle (1).svg';
import c3 from '../assets/squircle (2).svg';
import Features from "../component/features";
import Nav from "../component/nav";
import {Link} from "react-router-dom";
import Footer from "../component/footer";

const Home = () => {
  return (
      <>
          <Nav />
          <div className="Home">
              <img src={c2} alt="" className="c2"/>
              <img src={c3} alt="" className="c3"/>
              <Row>
                  <Col lg={6}>
                      <div className="home-left-hero">
                          <h1 className="">The best way to buy and sell <span>cryptocurrency</span></h1>
                          <p className="">Sign up now to buy cryptocurrency and trade the most popular currency pairs</p>

                          <div className="Download-app d-flex">
                              <div className="googlePlay">
                                  <button className="btn btn-dark google-play animate__bounceIn">Google Play</button>
                              </div>
                              <div className="appStore">
                                  <button className="btn btn-dark app-store animate__bounceIn">App Store</button>
                              </div>
                          </div>
                      </div>

                  </Col>
                  <Col lg={6}>

                      <img src={c1} alt="" className="c1"/>
                      <div className="auth-box animate__fadeInDownBig">
                          <div className="join">
                              <h4>Join us now</h4>
                          </div>
                              <div className="box-form">
                                  <form>
                                      <div className="form-buttons">
                                          <button className="btn btn-secondary">
                                              <img src={GoogleIcon} alt="" className="img-fluid"/> Continue with Google
                                          </button>
                                      </div>
                                      <div className="email_signup d-flex">
                                              <p>Or, sign up with your email</p>
                                      </div>
                                      <div className="form-group">
                                          <div className="form-label">Email</div>
                                          <div className="input-group">
                                              <i className='bx bxs-envelope'></i>
                                              <input type="text"
                                                     placeholder="Email"
                                                     required={true}
                                                     autoComplete="off"
                                                     className="form-control"/>
                                          </div>

                                      </div>

                                      <div className="form-group">
                                          <div className="form-label">Password</div>
                                          <div className="input-group">
                                              <i className='bx bxs-lock-alt'></i>
                                              <input type="password"
                                                     placeholder="Password"
                                                     className="form-control"
                                                     autoComplete="off"
                                                     required={true}/>
                                          </div>
                                      </div>

                                      <div className="form-buttons">
                                          <button className="btn btn-primary" type="submit">Sign up</button>
                                      </div>
                                      <div className="auth-sign">
                                          <p>Have an account? <Link to="/signIn"><span>Sign in</span></Link> </p>
                                      </div>

                                  </form>
                              </div>
                      </div>

                  </Col>
              </Row>
              <div className="breadcrumb">
                  <div className="coin-logos">
                      <div className="coin-box"><img className="coins" src={bit} alt=""/></div>
                      <div className="coin-box"><img className="coins" src={Eth} alt="" /></div>
                      <div className="coin-box"> <img className="coins" src={lte} alt=""/></div>
                      <div className="coin-box"><img className="coins" src={Usdt} alt=""/></div>
                  </div>
                  <section className="marquee market-prices">
                      <ul className="d-flex">
                          <li>BTC/USDT</li><span>18700 2.69%</span>
                          <li>BTC/ETH</li><span>18700 2.69%</span>
                          <li>BTC/BCH</li><span>18700 2.69%</span>
                          <li>ETH/USDT</li><span>1300 2.69%</span>
                          <li>XRP/USDT</li><span>1 2.69%</span>
                          <li>BCH/USDT</li><span>400 2.69%</span>
                          <li>LTE/USDT</li><span>100 2.69%</span>
                      </ul>
                  </section>
              </div>
          </div>
          <Process />
          <Features />
          <Footer />
      </>
  );
}
export default Home;
