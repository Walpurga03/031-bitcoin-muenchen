import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory";

const Podcast = () => {
  const podcastAr = [];
  return (
    <>
      <Title>
        <Subtitle>
          Live-Podcasts sind (noch) eine Seltenheit. Wir wollen das ändern. Wenn
          es euch gefallen hat hinterlasst uns eine Spende und gern auch ein
          Feedback (note).
        </Subtitle>
      </Title>
      <Directory categories={podcastAr} />
      <List>
        <ListItem>
          <Link href="/">Zurück</Link>
        </ListItem>
      </List>
    </>
  );
};

export default Podcast;

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
  margin-bottom: 1rem;
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
