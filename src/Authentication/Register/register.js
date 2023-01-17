import React, {useState} from "react";
import Nav from "../../component/nav";
import signInBackground from "../../assets/low-poly-grid-haikei (1).svg";
import GoogleIcon from "../../assets/google_logo_icon.png";
import { Button, Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";


const Register = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <>
          <Nav />
          <div className="sign d-flex">
              <div>
                  <img src={signInBackground} alt="" className="s-img"/>
              </div>
              <div className="s-msg">
                  <div className="join">
                      <h4>Let's Join with us</h4>
                  </div>
                  <div className="box-form">
                      <form>
                          <div className="signIn-google d-flex">
                              <img src={GoogleIcon} alt="" className="img-fluid"/> <p>Continue with Google</p>
                          </div>
                          <div className="email_sign d-flex">
                              <hr></hr>
                              <p>Or, sign up with your email</p>
                              <hr></hr>
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
                              <button className="btn btn-primary" type="submit" onClick={handleShow}>Sign up</button>
                          </div>
                          <div className="s-sign">
                              <p>Have an account? <Link to="/signIn"><span>Sign in!</span> </Link></p>
                          </div>
                      </form>
                      <Modal show={show} onHide={handleClose} className="modal">
                          <Modal.Header closeButton>
                              <Modal.Title>Email Confirmation</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                              A confirmation email has been sent to your email address. Please follow the instructions in the email to complete the process.
                          </Modal.Body>
                          <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "#165A4A"}}>
                                  Done
                              </Button>
                          </Modal.Footer>
                      </Modal>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Register;
