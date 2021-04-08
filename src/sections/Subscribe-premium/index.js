import React from "react";

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";

import ContactWrapper from "./contact.style";

const SubscribePremium = () => {
  return (
    <ContactWrapper id="contact">
      <SectionTitle className="section-title" UniWidth="55%">
        {/* <h4>Contact Us</h4> */}
        <h2>
          <span>Subscribe to our Premium Content Plan </span> 
        </h2>
      </SectionTitle>
      <Container>
        <form name="contactform" method="post" action="/pricing">
          <Button>Subscribe</Button>
        </form>
      </Container>
    </ContactWrapper>
  );
};

export default SubscribePremium;
