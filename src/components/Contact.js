import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {React, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
    const form = useRef();

    const sendEmail = (e) => {
      setButtonText("Sending...");
      e.preventDefault();
      emailjs.sendForm('service_2z6uq7f', 'template_bfkuwid', form.current, 'H91o4Dmf5MzafASxY')
        .then((result) => {
          setStatus({ succes: true, message: 'Message sent successfully'});
          setButtonText("Send");
          document.getElementById('first_name').value = '';
          document.getElementById('last_name').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('user_number').value = '';
          document.getElementById('message').value = '';
        }, (error) => {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
          setButtonText("Send");

        });

    };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>

                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="first_name"  placeholder="First Name" name="frist_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="last_name" type="text"placeholder="Last Name" name="last_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="user_email" type="email" placeholder="Email Address" name="user_email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="user_number" type="tel" placeholder="Phone No." name="user_number"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea id="message" rows="6"  placeholder="Message" name="message"></textarea>
                      <button  type="submit" ><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                  {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } 
                  </form>
               </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
