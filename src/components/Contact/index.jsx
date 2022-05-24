import emailjs from '@emailjs/browser';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import "./index.scss";

function Contact() {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'gmail',
      'template_a67849q',
      refForm.current,
      '4YMGxP23vDpSVzHwK'
    )
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false);
      },
      () => {
        alert('Failed to send message. Please try again!')
      }
    )
  }

  return (
    <div className="container contact-page">
      <div className="content-zone">
        <h1>Contact me</h1>
        <p>

        </p>
        <div className="contact-content-wrapper">
          <div className="contact-info">
            <div className="contact-desc">
              <p>
                I also a freelancer developer, you can contact me via information below. Or send me an email with the form is available next to it
              </p>
            </div>
            <div className="contact-info-detail">
              <div className="info-phone-number info-item">
                <FontAwesomeIcon icon={faPhone} color="#4d4d4e"/>
                +84 81637 1770
              </div>
              <div className="info-address info-item">
                <FontAwesomeIcon icon={faLocationDot} color="#4d4d4e"/>
                Nam Tu Liem District, Ha Noi Capital, Viet Nam
              </div>
              <div className="info-email info-item">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                binhnguyen29122001@gmail.com
              </div>
            </div>
            <div className="contact-social">
              <p>
                Social networks
              </p>
              <ul className="social-list">
                  <li className="social-item">
                      <a href="https://www.facebook.com/binhnguyen29122001/" target="_blank">
                          <FontAwesomeIcon icon={faFacebook}/>
                      </a>
                  </li>
                  <li className="social-item">
                      <a href="https://github.com/Backheart-js" target="_blank">
                          <FontAwesomeIcon icon={faGithub}/>
                      </a>
                  </li>
                  <li className="social-item">
                      <a href="" target="_blank">
                          <FontAwesomeIcon icon={faTwitter}/>
                      </a>
                  </li>
                  <li className="social-item">
                      <a href="" target="_blank">
                          <FontAwesomeIcon icon={faLinkedin}/>
                      </a>
                  </li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <div className="input-wrap">
                  <li className="half">
                    <input type="text" name="name" placeholder="Name" required/>
                  </li>
                  <li className="half">
                    <input type="email" name="email" placeholder="Email" required/>
                  </li>
                </div>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required/>
                </li>
                <li>
                  <textarea type="text" name="message" placeholder="Content message" required/>
                </li>
                <li className="btn">
                  <input type="submit" className="send-btn" value="Send"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact