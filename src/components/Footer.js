import { Container, Row, Col } from "react-bootstrap";
 import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/social-github.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
           <Col size={12} sm={6}>
           <h1 id="logo">Norah</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nourah-al-tamimi"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/nor4ham"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/nona.h2023/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
