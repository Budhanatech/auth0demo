import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <Logo
          src="https://budhanatech.com/assets/images/logo.png"
          alt="Budhana Tech L.L.P"
        />
      </Link>

      <CenterLogo>
        <img
          src="https://www.ignition-technology.com/wp-content/uploads/2021/11/brand-evolution_logo_Auth0_white-1.png"
          alt="Budhana Tech L.L.P"
        />
      </CenterLogo>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  position: relative;
  height: 80px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  z-index: 1;

  img {
    height: 40px;
  }

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const CenterLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    height: 35px;
  }
`;
