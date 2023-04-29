import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <NavList>
          <NavListItem>Bitcoin Block München</NavListItem>
          <NavLink href="https://bitcoinmunich.de/">Zurück</NavLink>
        </NavList>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
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

  @media (max-width: 330px) {
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
`;
