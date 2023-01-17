import React, {useState} from "react";
import '../styles/refProgram.css'
import Nav from "../component/nav";
import {Accordion, Col, Container, Row, Table} from "react-bootstrap";
import link from '../assets/undraw_share_link_re_54rx (1).svg';
import connection from '../assets/undraw_connection_re_lcud (1).svg';
import recieveCoin from '../assets/undraw_bitcoin_re_urgq (2).svg';
import influencer from '../assets/Marketing-pana.svg';
import income from '../assets/Money-income-amico.svg';
import Footer from "../component/footer";


const RefProgram = () => {
    const [isActive, setIsActive] = useState(true);
  return (
     <>
         <Nav />
         <div className="ref-program">
             <div className=" ref-details">
                 <h1 className="title">Referral program</h1>
                 <Row>
                     <Col lg={4}>
                         <div className="ref-left">
                             <img src={income} alt="" className="money-income"/>
                         </div>

                     </Col>
                     <Col lg={8}>
                         <div className="ref-right">
                             <h3 className="commission-details">Receive <span>up to 75% </span>commission on all of your referrals.
                                 The higher the trading volume, the higher the profit</h3>
                             <button className="btn btn-dark">Receive your referral link</button>
                         </div>
                     </Col>
                 </Row>

             </div>
             <div className="process">
                 <h1>How does it work</h1>
                 <Row className="row-process">
                     <Col>
                         <img className="ref-img" src={link} alt="" />
                         <h5>
                             1. Receive your link
                         </h5>
                         <p className="process-details">
                             Generate your referral code
                         </p>
                     </Col>
                     <Col>
                         <img className="ref-img" src={connection} alt="" />
                         <h5>
                             2. Invite friends
                         </h5>
                         <p className="process-details">
                             Send the link to friends and receive a
                             percentage of every completed transaction that they make.
                         </p>
                     </Col>
                     <Col>
                         <img className="ref-img" src={recieveCoin} alt="" />
                         <h5>
                             3. Start earning

                         </h5>
                         <p className="process-details">
                             Receive
                             up to 75% commission on all your referrals. The greater the volume of trades,
                             the greater the profit.

                         </p>
                     </Col>
                 </Row>
             </div>
             <div className="profit-table">
                 <Container>
                     <h1 className="title">Profit distribution table</h1>
                     <div className="profit-table-link d-flex">
                         <p className="profit-links"  onClick={ () => setIsActive(true)}>Normal conditions</p>
                         <p className="profit-links" onClick={ () =>  setIsActive(false)}>Terms for partners</p>
                     </div>
                     {isActive ? (
                         <Table>
                             <thead>
                             <tr>
                                 <th className="profit-table-commission">Commission from all of your
                                     referrals for the week</th>
                                 <th>$0 - $1</th>
                                 <th>$1 - $50</th>
                                 <th>$50 - $250</th>
                                 <th>$250 +</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                                 <td>Approximate trading volume</td>
                                 <td>$1 - $400</td>
                                 <td>$400 - $20k</td>
                                 <td>$20k - $100k</td>
                                 <td>$100k +</td>
                             </tr>
                             <tr>
                                 <td>Interest earned</td>
                                 <td>0%</td>
                                 <td>25%</td>
                                 <td>35%</td>
                                 <td>50%</td>
                             </tr>
                             <tr>
                                 <td>Your weekly earnings</td>
                                 <td>😔</td>
                                 <td>$0.25 - $12.5</td>
                                 <td>$17.5 - $87.5</td>
                                 <td>$125 +</td>
                             </tr>
                             </tbody>
                         </Table>
                     ): (
                         <Table>
                             <thead>
                             <tr>
                                 <th className="profit-table-commission">Commission from all of your
                                     referrals for the week</th>
                                 <th>$250 - $500</th>
                                 <th>$500 - $1000</th>
                                 <th>$1000 - $5000</th>
                                 <th>$5000 +</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                                 <td>Approximate trading volume</td>
                                 <td>$100k- $200k</td>
                                 <td>$200k - $400k</td>
                                 <td>$400k - $2 000 000</td>
                                 <td>$2 000 000 +</td>
                             </tr>
                             <tr>
                                 <td>Interest earned</td>
                                 <td>50%</td>
                                 <td>55%</td>
                                 <td>60%</td>
                                 <td>75%</td>
                             </tr>
                             <tr>
                                 <td>Your weekly earnings</td>
                                 <td>$125 - $250</td>
                                 <td>$275 - $550</td>
                                 <td>$600 - $3000</td>
                                 <td>$3750 +</td>
                             </tr>
                             </tbody>
                         </Table>
                     )
                     }

                 </Container>
             </div>
             <div className="advice d-flex">
                 <div className="advice-content">
                     <div className="advice-links d-flex">
                         <p className="advice-links"  onClick={ () => setIsActive(true)}>Example1</p>
                         <p className="advice-links" onClick={ () =>  setIsActive(false)}>Example2</p>
                     </div>
                     {isActive ? (
                         <p className="advice-details">You have 10 referrals, each of which trades $40,000 per week.
                             The total sum of the trades of all of your referalls will be $400,000 per week.
                             They will pay $1000 commission, and you will receive 50% of this amount, i.e.
                             $500, This means, <span>per month on 10 such referrals you will earn $2000</span></p>
                     ): (
                         <p className="advice-details">You have 345 referalls, each of which trades $2000
                             per week. The total sum of trades of all of your referrals will be $690,000 per week.
                             They will pay $1725 in commission, and you will receive 60% of this amount,
                             i.e. $1035. This means that per month for 345 such referalls you will receive $4140.</p>
                     )
                     }

                 </div>
                 <div className="advice-content2">
                     <h6>Advice</h6>
                     <p>
                         Your task is to increase the trading volume of your referrals.
                         Therefore it's logical to spend time on training your referrals, teaching them
                         the principles of how the exchange works, etc.
                     </p>
                     <p> You might have a lot of referalls, each trading in small volumes,
                         or it could be a small network of whales 😉 Choose your strategy.</p>
                 </div>
             </div>
             <div className="blogger d-flex">
                 <div>
                     <img src={influencer} alt="" className="influencer"/>
                 </div>
                 <div>
                     <h3 className="title">Blogger ?</h3>
                     <p className="message">If you have a blog, lots of subscribers or you would like to create an advertising campaign,
                         get in touch with us using this address - support@veximo.com</p>
                     <p>We have special terms for you.</p>
                 </div>
             </div>
             <div className="QA">
                 <Container>
                     <h1>You asked and we answered</h1>
                     <div className="accordion accordion-flush" id="accordionFlushExample">
                         <div className="accordion-item">
                             <h2 className="accordion-header" id="flush-headingOne">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#flush-collapseOne" aria-expanded="false"
                                         aria-controls="flush-collapseOne">
                                     How is the commission calculated from my referrals ?
                                 </button>
                             </h2>
                             <div id="flush-collapseOne" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body">The trading volume is calculated for each pair, then all summarized.

                                     Referral 1. One of your referrals has bought 1 BTC for a price of $4000, and then after 1 minute, sold it for a price of $4010. The value of the trades will be $8010. The total commission will be $20
                                     Referral 2. Another of your referrals has traded on the pair ETH/USDT. And during the day he has bought and sold 10 ETH five times.

                                     This means that, with an ETH price of $135, over the course of the day, the value of trades is $6750. The size of the commission paid is $16.87

                                     This means that, for one day the volume of trades of all of your referrals will make up $14750. Throughout the week, with these trades, you will receive a total of $103,250 of trading value

                                     The total amount of commission paid for the week is $258
                                 </div>
                             </div>

                         </div>
                         <div className="accordion-item">
                             <h2 className="accordion-header" id="flush-headingTwo">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#flush-collapseTwe" aria-expanded="false"
                                         aria-controls="flush-collapseTwo">
                                     When will the bonus be calculated
                                 </button>
                             </h2>
                             <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body">Referral bonuses are accrued every Tuesday at 00:00 (UTC). The bonuses will appear on the wallets of each asset.
                                     All transactions appear in the replenishment history.
                                 </div>
                             </div>
                         </div>
                         <div className="accordion-item">
                             <h2 className="accordion-header" id="flush-headingThree">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#flush-collapseThree" aria-expanded="false"
                                         aria-controls="flush-collapseTwo">
                                     If my referrals trading volume is less than $400 per week, will I still receive anything ?
                                 </button>
                             </h2>
                             <div id="flush-collapseThree" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body"> Probably not. It depends on the size of the commission fee. If your referrals for the week have paid less than $1 in commission, then you will not receive anything.
                                     A good reason to encourage your referrals to trade or to expand your referral network. 😉
                                 </div>
                             </div>
                         </div>
                         <div className="accordion-item">
                             <h2 className="accordion-header" id="flush-headingFour">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#flush-collapseFour" aria-expanded="false"
                                         aria-controls="flush-collapseFour">
                                     Can we be mutual referrals to each other ?
                                 </button>
                             </h2>
                             <div id="flush-collapseFour" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body"> Unfortunately not ! A referral can only be an account that was registered after your own ?
                                 </div>
                             </div>
                         </div>
                         <div className="accordion-item">
                             <h2 className="accordion-header" id="flush-headingFive">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#flush-collapseFive" aria-expanded="false"
                                         aria-controls="flush-collapseFive">
                                     Can I create a new account, in order to be a referral for myself ?
                                 </button>
                             </h2>
                             <div id="flush-collapseFive" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body"> Yes, of course ! But there is little point in this.
                                     It's far better to develop your referral network of friends and acquintances, who will be trading larger amounts.
                                 </div>
                             </div>
                         </div>
                         <div className="accordion-item">
                             <h2 className="accordion-header" id="flush-headingSix">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#flush-collapseSix" aria-expanded="false"
                                         aria-controls="flush-collapseSix">
                                     Where can I see the bonuses from the referral program ?
                                 </button>
                             </h2>
                             <div id="flush-collapseSix" className="accordion-collapse collapse"
                                  aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                 <div className="accordion-body">   On the page 'my bonuses' you will see the approximate asset value, which will be credited on Tuesday.
                                     Additionally, all referral program transactions are available on the assets pages in the deposit history.
                                 </div>
                             </div>
                         </div>
                     </div>
                 </Container>
             </div>
         </div>
         <Footer />
     </>
  );
}
export default RefProgram;
