import React from "react";
import styled from "styled-components";
import Directory from "../../directory/directory";

const speaker = () => {
  const speaker = [
    {
      id: 1,
      name: "Daniel Wingen",
      imageFront: require("./images/frontWingen.jpg"),
      imageBack: require("./images/daniel.jpg"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
    {
      id: 2,
      name: "Leon Wankum",
      imageFront: require("./images/frontWankum.jpg"),
      imageBack: require("./images/leon.jpg"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
    {
      id: 3,
      name: "Harald Rauter",
      imageFront: require("./images/frontRauter1.jpg"),
      imageBack: require("./images/harald.jpg"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
  ];
  return (
    <>
      <div id="speaker" />
      <Title>
        <h2>Speaker</h2>
        <p>kurzer text</p>
      </Title>
      <Directory categories={speaker} />
      <List>
        <ListItem>
          <Link href="#Top">Top</Link>
        </ListItem>
      </List>
    </>
  );
};

export default speaker;

const Title = styled.div`
  margin: 2rem 0;
  text-align: center;
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
  box-sizing: border-box;
  &:hover {
    background: #ffe700;
  }
`;
const Link = styled.a`
  color: #ffe700;
  text-decoration: none;
  box-sizing: border-box;
  ${ListItem}:hover & {
    color: #000;
  }
`;
