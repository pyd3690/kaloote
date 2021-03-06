import React from "react";
import Link from "next/link";

import { Container, Row, Col } from "reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import logo from "assets/images/app/footer/footer-logo.png";
import particleOne from "assets/images/app/footer/footer-particle.png";

import FotterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FotterWrapper>
      <img className="section__particle one" alt="img" src={particleOne} alt="appion app landing" />
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <Link href="#">
                <a className="footer-logo">
                  <img src={logo} alt="logo" />
                </a>
              </Link>
              <ul className="info">
                <li>
                  <FiMail />
                    <a href="mailto:contact@appion.com">contact@Kaloote.com</a>
                </li>
                <li>
                  <FiPhoneCall />
                    <a href="tel:1-562-867-5309">+1-562-867-5309"</a>
                </li>
              </ul>

              <ul className="social">
                <li>
                  <Link href="#">
                    <a>
                      <FaFacebookF />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <FaLinkedinIn />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link href="#">
                <a>Terms</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            Copyright @
            <Link href="#">
              <a>Kaloote </a>
            </Link>
             | All Right Reserved 2020
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
