import React from "react";
import styled from "styled-components";



const Wrapper = styled.section`
padding:1rem`
const Planet = () => {
  return (
    <Wrapper className='plant'>
    
    <div className="container grid grid-two-column">
    <div>
        <h3 className="header">
            Payment Planet Prepaid Card
          </h3>
          <h2 className="content">
            The Card that takes You to different Places
          </h2>
          <img
            src="images/playstore.jpeg"
            className="side"
          />
    </div>
    <div>

          <img
            src="images/card.jpeg"
            className="right-side"
          />
          </div>
        </div>
        </Wrapper>

  );
};

export default Planet;