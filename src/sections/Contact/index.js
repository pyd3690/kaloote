import React from "react";

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";

import ContactWrapper from "./contact.style";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <SectionTitle className="section-title" UniWidth="55%">
        {/* <h4>Contact Us</h4> */}
        <h2>
          <span>Subscribe to our Newsletter </span> 
        </h2>
      </SectionTitle>
      <Container>
        <form name="contactform" method="post" action="#">
          <input type="email" placeholder="Enter your Email" />
          <Button>Subscribe</Button>
        </form>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
