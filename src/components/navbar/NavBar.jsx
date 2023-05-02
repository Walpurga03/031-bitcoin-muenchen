import React from "react";
import styled from "styled-components";
import NavImage from "../../images/Block-Munich.jpg";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavList>
          <NavListItem>
            <Img src={NavImage} alt="Block-Muenchen" />
          </NavListItem>
          <NavLink href="https://bitcoinmunich.de/">Zurück</NavLink>
        </NavList>
      </NavContainer>
    </>
  );
};

export default NavBar;
const Img = styled.img`
  position: absolute;
  top: 0.3rem;
  left: 1rem;
  width: 6rem;
`;

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
  justify-content: space-between;
  color: #fff;
`;

const NavListItem = styled.li`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
  text-transform: uppercase;
  list-style-type: none;
  font-weight: 800;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 350px) {
    font-size: 0.7rem;
    margin-top: 0.7rem;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-right: 1rem;
  padding: 0.2rem;
  background-color: #ffe700;
  color: #000000;
  @media (max-width: 350px) {
    font-size: 0.7rem;
    margin-top: 0.7rem;
    margin-right: 0.1rem;
  }
`;
