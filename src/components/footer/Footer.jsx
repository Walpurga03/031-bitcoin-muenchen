import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <NavContainer>
        <NavList>
          <NavLink href="https://bitcoinmunich.de/impressum/">
            Impressum
          </NavLink>
          <NavLink href="https://bitcoinmunich.de/credits/">Credits</NavLink>
          <NavLink href="https://bitcoinmunich.de/privacy-policy/">
            Datenschutz
          </NavLink>
        </NavList>
      </NavContainer>
    </>
  );
};

export default Footer;

const NavContainer = styled.nav`
  width: 100vw;
  background-color: #000;
  height: 2.5rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  color: #fff;
`;

const NavLink = styled.a`
  cursor: pointer;
  margin-top: 0.5rem;
  margin-right: 1rem;
  color: #ffe700;
`;
