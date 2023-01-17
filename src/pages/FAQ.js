import React from "react";
import Nav from "../component/nav";
import '../styles/FAQ.css';
import faqImg from '../assets/FAQs-pana.svg';
import Footer from "../component/footer";


const FAQ = () => {
  return (
      <>
          <Nav />
          <div className="faq d-flex">
              <div className="faq-msg">
                  <h1>FAQ</h1>
                  <p>Get answers and explore everything you need to know about your question at your fingertips.</p>
                  <div className="">
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="flush-headingOne">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#flush-collapseOne" aria-expanded="false"
                                          aria-controls="flush-collapseOne">
                                      Can my Bitcoin get lost
                                  </button>
                              </h2>
                              <div id="flush-collapseOne" className="accordion-collapse collapse"
                                   aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">Placeholder content for this accordion, which is intended
                                      to demonstrate the <code>.accordion-flush</code> class. This is the first item's
                                      accordion body.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="flush-headingTwo">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                          aria-controls="flush-collapseTwo">
                                      How to enable 2FA
                                  </button>
                              </h2>
                              <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                   aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">Placeholder content for this accordion, which is intended
                                      to demonstrate the <code>.accordion-flush</code> class. This is the second item's
                                      accordion body. Let's imagine this being filled with some actual content.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="flush-headingThree">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#flush-collapseThree" aria-expanded="false"
                                          aria-controls="flush-collapseThree">
                                      How to track progress of my bitcoin on blockchain network
                                  </button>
                              </h2>
                              <div id="flush-collapseThree" className="accordion-collapse collapse"
                                   aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">Placeholder content for this accordion, which is intended
                                      to demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                      accordion body. Nothing more exciting happening here in terms of content, but just
                                      filling up the space to make it look, at least at first glance, a bit more
                                      representative of how this would look in a real-world application.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="flush-headingFour">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#flush-collapseFour" aria-expanded="false"
                                          aria-controls="flush-collapseFour">
                                      How to set up my password
                                  </button>
                              </h2>
                              <div id="flush-collapseFour" className="accordion-collapse collapse"
                                   aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">Placeholder content for this accordion, which is intended
                                      to demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                      accordion body. Nothing more exciting happening here in terms of content, but just
                                      filling up the space to make it look, at least at first glance, a bit more
                                      representative of how this would look in a real-world application.
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                              <h2 className="accordion-header" id="flush-headingFive">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                          data-bs-target="#flush-collapseFive" aria-expanded="false"
                                          aria-controls="flush-collapseFive">
                                      How to buy a gift-card
                                  </button>
                              </h2>
                              <div id="flush-collapseFive" className="accordion-collapse collapse"
                                   aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                  <div className="accordion-body">Placeholder content for this accordion, which is intended
                                      to demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                      accordion body. Nothing more exciting happening here in terms of content, but just
                                      filling up the space to make it look, at least at first glance, a bit more
                                      representative of how this would look in a real-world application.
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
              <div className="faq-img">
                  <img src={faqImg} alt="" className="img"/>
              </div>
          </div>
          <Footer />
      </>
  );
}
export default FAQ;
