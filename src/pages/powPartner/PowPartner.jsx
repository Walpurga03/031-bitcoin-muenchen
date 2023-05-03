import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory";

const PowPartner = () => {
  const powPartnerAr = [];
  return (
    <>
      <TitleBox id="powPartner">
        <PowPartnerTitle>Pow-Partner</PowPartnerTitle>
      </TitleBox>
      <Title>
        <Subtitle>
          Ohne die Unterstützung unserer Proof of Work - Partner wäre das Event
          nicht möglich gewesen. Hier haben Firmen und Marken kostenlos ihre
          Zeit, Energie und Produkte investiert. Lass ein Dankeschön für diese
          Leistung da und sende ein Feedback (note).
        </Subtitle>
      </Title>
      <Directory categories={powPartnerAr} />
      <List>
        <ListItem>
          <Link href="/">Zurück</Link>
        </ListItem>
      </List>
    </>
  );
};

export default PowPartner;

const TitleBox = styled.div`
  margin-top: 5rem;
  width: 100vw;
  height: 2.5rem;
  background-color: #000;
  text-transform: uppercase;
  font-weight: 700;
`;

const PowPartnerTitle = styled.div`
  font-size: 1.5rem;
  padding-top: 0.4rem;
  text-align: center;
  color: #ffe700;
`;

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
