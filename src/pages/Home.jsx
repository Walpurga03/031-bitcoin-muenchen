import React from "react";
import Logo from "../images/Logo_v4v.png";
import NavImage from "../images/Block-Munich.jpg";
import styled from "styled-components";
import Directory from "../components/directory/directory";

const Home = () => {
  const bbm = [
    {
      id: 1,
      name: "BBM",
      imageFront: require("../images/brezel.png"),
      imageBack: require("../images/brezel.png"),
      lightning: "bitcoinblock@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
  ];

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
      <Container>
        <TitleLogo src={Logo} alt="Block-Muenchen" />
        <Subtitle>
          Offene Bildung. Für alle zugänglich. Keine Kosten. Entscheide
          freiwillig was dir dieses Konzept Wert ist. Dank Bitcoin-Lightning ist
          diese Art der Spende gebührenfrei und unabhängig möglich. Den Wert
          bestimmst du.
        </Subtitle>
        <Directory categories={bbm} />
        <MobilAnsicht>Zur Spende auf die Karte Drücken</MobilAnsicht>
        <Subtitle>
          Spenden an Bitcoin Block München (BBM) werden an alle freiwilligen
          Helfer verteilt und über den Verein zur Unterstützung des nächsten
          Blocks (Schweiz) verwendet.
        </Subtitle>
      </Container>
    </>
  );
};

export default Home;

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

const MobilAnsicht = styled.div`
  display: none;
  @media (max-width: 700px) {
    font-size: 1.5rem;
    text-align: center;
    display: block;
    text-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
  }
`;
const TitleLogo = styled.img`
  width: 30rem;
  display: block;
  margin: 1rem auto;
  @media (max-width: 700px) {
    width: 20rem;
  }
  @media (max-width: 350px) {
    width: 15rem;
  }
`;
const Container = styled.div`
  min-width: 300px;
  width: 90%;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  letter-spacing: 0.1em;
  margin: 2rem 3rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.5);
  @media (max-width: 700px) {
    font-size: 1.7rem;
    text-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.3);
  }
`;
