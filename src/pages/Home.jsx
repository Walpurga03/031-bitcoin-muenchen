import React from "react";
import styled from "styled-components";
import Speaker from "../components/v4v/speaker/speaker";
import Directory from "../components/directory/directory";

const Home = () => {
  const bbm = [
    {
      id: 1,
      name: "BBM",
      imageFront: require("../images/brezel.png"),
      imageBack: require("../images/brezel.png"),
      lightning: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
  ];

  return (
    <>
      <Container>
        <Title id="top">Grafik mit logo</Title>
        <Subtitle>Kurztext über V4V</Subtitle>
        <Directory categories={bbm} />
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
              <Link href="#proofOfWork">PoW-Partner</Link>
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
          <h1>PoW</h1>
          <p>Wir sind ein tolles Team von Webentwicklern.</p>
        </div>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  min-width: 300px;
  width: 90%;
  margin: 0 auto;
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ListItem = styled.li`
  display: inline-block;
  background-color: #000;
  margin-left: 3rem;
  width: 10rem;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  border: solid 3px #000;
  &:hover {
    background: #ffe700;
  }
  @media (max-width: 850px) {
    margin-left: 0.5rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 700px) {
    margin-left: 0;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;
const Link = styled.a`
  text-align: center;
  display: block;
  font-size: 1.5rem;
  color: #ffe700;
  text-decoration: none;
  box-sizing: border-box;
  ${ListItem}:hover & {
    color: #000;
  }
`;
