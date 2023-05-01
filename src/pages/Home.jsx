import React from "react";
import styled from "styled-components";
import Speaker from "../components/v4v/speaker/speaker";
import Directory from "../components/directory/directory";

const Home = () => {
  const bbm = [
    {
      id: 1,
      name: "Alexander Moik",
      imageFront: require("../images/brezel.png"),
      imageBack: require("../images/brezel.png"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
  ];

  return (
    <>
      <Title id="top">Grafik mit logo</Title>
      <Subtitle>Kurztext über V4V</Subtitle>
      <Directory categories={bbm} />;
      <Navigation>
        <List>
          <ListItem>
            <Link href="#speaker">Speaker</Link>
          </ListItem>
          <ListItem>
            <Link href="#workshop">Workshop</Link>
          </ListItem>
          <ListItem>
            <Link href="#podcast">Podcast</Link>
          </ListItem>
          <ListItem>
            <Link href="#proofOfWork">Proof of Work</Link>
          </ListItem>
        </List>
      </Navigation>
      <Speaker />
      <div id="workshop">
        <h1>Workshop</h1>
        <p>Wir sind ein tolles Team von Webentwicklern.</p>
      </div>
      <div id="podcast">
        <h1>Podcast</h1>
        <p>Wir sind ein tolles Team von Webentwicklern.</p>
      </div>
      <div id="proofOfWork">
        <h1>Proof of Work</h1>
        <p>Wir sind ein tolles Team von Webentwicklern.</p>
      </div>
    </>
  );
};

export default Home;

const Title = styled.div`
  margin: 2rem;
  font-size: 2rem;
  text-align: center;
`;
const Subtitle = styled.div`
  text-align: center;
  font-size: 1rem;
  margin: 1rem;
`;
const Navigation = styled.nav`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
`;
const ListItem = styled.li`
  margin: 0 2rem;
  background-color: #000;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  border: solid 3px #000;
  box-sizing: border-box; /* hinzugefügt */
  &:hover {
    background: #ffe700;
  }
`;
const Link = styled.a`
  color: #ffe700;
  text-decoration: none;
  box-sizing: border-box; /* hinzugefügt */
  ${ListItem}:hover & {
    color: #000;
  }
`;
