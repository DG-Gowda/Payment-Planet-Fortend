import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { CgLock } from "react-icons/cg";
import "./home.css"

const Card = () => {
 
  return (
    <form className="cart">
    <h2 className="with-this">Go Places with This Card</h2>
  <div>
      <div className='card_wrap'>
      <div className='card' style={{backgroundColor:"#ddead1"}}>
      <CgLock name="" className="card-icon" />
      <h3>ACCEPTED WORLD WIDE</h3>
      <p>Use Payment Planet Card Whenever MasterCard Is Accepted At Hotels Atm Machine</p>
      </div>
      <div className='card' style={{backgroundColor:"#b3cf99"}}>
      <CgLock name="" className="card-icon" />
      <h3>Locked In Rates</h3>
      <p>Use Payment Planet Card Whenever MasterCard Is Accepted Is Secured To Payment</p>
      </div>
      <div className='card' style={{backgroundColor:"#95bb72"}}>
      <CgLock name="" className="card-icon" />
      <h3>Gain Flexibility</h3>
      <p>Use Payment Planet Card Whenever MasterCard Is Accepted More Benefits For You</p>
      </div>
      <div className='card' style={{backgroundColor:"#658354"}}>
      <CgLock name="" className="card-icon" />
      <h3>Manage Your Budget</h3>
      <p>Use Payment Planet Card Whenever MasterCard Is Accepted At Hotels Atm Machine</p>
      </div>
      </div>
      </div>
      </form>
  );
};

  
export default Card;