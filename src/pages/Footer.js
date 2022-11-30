import React from "react";
import styled from "styled-components";

import "./home.css";

const Wrapper = styled.section`
  padding: 1rem;
  margin: 0rem orem;
`;
const Footer = () => {
  return (
    <Wrapper className="foot" >
      <div className="container grid grid-four-column">
      <div>
        <h2>Payment Planet</h2>
        <p>Our Debit Card Program Makes It Easy To Get The Most Out Of Your Everyday Spending</p>
      </div>
        <div className="services">
          <h2>Services</h2>
          <br></br>
          <h3>payment</h3>
          <br></br>
          <h3>Planet</h3>
          <br></br>
          <h3>Prepaid</h3>
          <br></br>
          <h3>Card</h3>
        </div>
        <div>
          <img src="images/playstore.jpeg" className="footer" />
        </div>

      </div>

    </Wrapper>
  );
};

export default Footer;
