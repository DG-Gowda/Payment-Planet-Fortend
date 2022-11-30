import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import './Nav'
import Nav from "./Nav";
// import {IoSchool} from 'react-icons/io5'


const MainHeader = styled.header`
  padding: 25 25.8rem;
  height: 6rem;
  margin: 5rem 10ch;

  background-color: rgb(235, 255, 210);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 50px;
`;

const Header = () => {
  return (
    
    <MainHeader>
  
      <NavLink to="/">
      {/* <IoSchool/> */}
      </NavLink>
      <Nav/>
    </MainHeader>
  );
};


export default Header;