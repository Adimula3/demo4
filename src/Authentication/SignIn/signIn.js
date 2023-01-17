import React, {useState} from "react";
import Nav from "../../component/nav"
import signInBackground from '../../assets/low-poly-grid-haikei (1).svg';
import '../styles/style.css'
import GoogleIcon from "../../assets/google_logo_icon.png";
import { Button, Modal, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";

const SignIn = () => {
    const [show, setShow] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Confirmation code: ${confirmationCode}`);
        // Do something with the confirmation code here
    }

    return (
        <>
         <Nav />
            <div className="sign d-flex">
                <div>
                    <img src={signInBackground} alt="" className="s-img"/>
                </div>
                <div className="s-msg">
                    <div className="join">
                        <h4>Sign In</h4>
                    </div>
                    <div className="box-form">
                        <form>
                            <div className="signIn-google d-flex">
                                <img src={GoogleIcon} alt="" className="img-fluid"/> <p>Continue with Google</p>
                            </div>
                            <div className="email_sign d-flex">
                                <hr></hr>
                                <p>Or, sign in with your email</p>
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
                                <button className="btn btn-primary" type="submit" onClick={handleShow}>Sign in</button>
                            </div>
                            <div className="s-sign">
                                <p>Don't have an account? <Link to="/Register"><span>Create!</span></Link> </p>
                            </div>
                        </form>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Email Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                A 6 digit confirmation code has been sent to your email. Please enter the code in the form below to complete the process.
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formConfirmationCode">
                                        <Form.Label>Confirmation Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter code"
                                            value={confirmationCode}
                                            onChange={event => setConfirmationCode(event.target.value)}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignIn;
