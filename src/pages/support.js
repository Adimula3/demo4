import React from "react";
import '../styles/support.css';
import Nav from "../component/nav";
import {Col, Row} from "react-bootstrap";
import supportImage from '../assets/Service 24_7-amico.svg';
import {Link} from "react-router-dom";
import Footer from "../component/footer";


const Support = () => {

    return (
        <>
            <Nav/>
            <div className="support">
                <Row>
                    <Col lg={6}>
                        <div className="s-content">
                            <h1>We are here to offer you support and provide efficient solutions</h1>
                            <div className="form-group d-flex" >
                                <input type="search" className="form-control"/>
                                <button type="button" className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img src={supportImage} alt="" className="s-Img"/>
                    </Col>
                </Row>

                <div className="s-more d-flex">
                    <div className="s-box">
                        <div className="knowledge-base">
                            <h4>Knowledge Base</h4>
                            <p>Learn more about crypto</p>
                            <button className="btn btn-primary">Go to page</button>
                        </div>
                    </div>
                    <div className="s-box">
                        <div className="live-chat">
                            <h4>Complaint</h4>
                            <p>Create a ticket</p>
                          <Link to="/chatPage"><button className="btn btn-primary">Go to page</button></Link>
                        </div>
                    </div>
                    <div className="s-box">
                        <div className="FaQ">
                            <h4>FAQ</h4>
                            <p>Get answers and explore</p>
                           <Link to="/FaQ"><button className="btn btn-primary">Go to page</button></Link>
                        </div>
                    </div>
                </div>
                <div className="topics d-flex">
                    <div className="popular-topics">
                        <h1>Popular Topics</h1>
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
                    <div className="recent-post">
                        <h1>Recent Posts</h1>
                        <div>
                            <p>Earn 10% referral bonus on first deposit</p>
                            <span>January 10, 2023</span>
                            <hr/>
                        </div>
                        <div>
                            <p>Doge coin will be listed on our exchange soon</p>
                            <span>February 10, 2023</span>
                            <hr/>
                        </div>
                        <div>
                            <p>We will be hosting a webinar to talk more about web3</p>
                            <span>January 10, 2023</span>
                            <hr/>
                        </div>
                        <div>
                            <p>Earn 10% referral bonus on first deposit</p>
                            <span>January 10, 2023</span>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Support;
