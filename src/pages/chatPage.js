import React, {useRef, useState} from "react";
import Nav from "../component/nav";
import '../styles/chatPage.css';
import Footer from "../component/footer";
import chatIcon from '../assets/icons8-chat-message-80.png';
import close from '../assets/icon-close.svg';
import useOnClickOutside from "../hooks/useOnClickOutside";
const ChatPage = () => {
    const [showChat, setShowChat] = useState(false);
    const ref = useRef();

      const handClick = () => {
          setShowChat(!showChat);
      }
      const handleClose = () => {
        setShowChat(false);
      }

    useOnClickOutside(ref, () => setShowChat(false));
  return (
      <>
          <Nav />
          <div className="complaint-page">
              <h1>Transaction error</h1>
              <p>Please provide the information below</p>
              <div>
                  <form>
                      <div className="form-group">
                          <div className="form-label">Transaction Reference</div>
                          <div className="input-group">
                              <input type="text"
                                     placeholder="Enter Transaction Reference"
                                     required={true}
                                     autoComplete="off"
                                     className="form-control"/>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="form-label">Email</div>
                          <div className="input-group">
                              <input type="text"
                                     placeholder="Enter your email Address"
                                     required={true}
                                     autoComplete="off"
                                     className="form-control"/>
                          </div>
                      </div>
                      <div className="form-group">
                          <div className="form-label">Issue/Message</div>
                          <div className="input-group">
                              <textarea type="text"
                                     placeholder="Message"
                                     required={true}
                                     autoComplete="off"
                                     className="form-control"/>
                          </div>
                      </div>
                      <div className="form-buttons">
                          <button className="btn btn-primary" type="submit">Submit</button>
                      </div>
                  </form>
              </div>

              {
                  showChat ? (
                      <div className="chat-box">
                          <img src={close} alt="" className="close-icon" onClick={handleClose}/>
                          <h1>hello</h1>
                      </div>
                      ): (
                      <img src={chatIcon} alt="" className="chat-img" onClick={handClick} />
                  )

              }
          </div>
          <Footer />
      </>
  );
}
export default ChatPage;
