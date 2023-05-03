import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory";

const Workshop = () => {
  const workshopAr = [
    {
      id: 2,
      name: "Mathias Linkerhand",
      imageFront: require("./backImages/mathias-b.jpg"),
      imageBack: require("./backImages/mathias-b.jpg"),
      lightning: "mathias_u1f596@ln.tips",
    },
    {
      id: 3,
      name: "Keno",
      imageFront: require("./backImages/keno-b.jpg"),
      imageBack: require("./backImages/keno-b.jpg"),
      lightning:
        "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhg6rfvd4hymmpv3mkz7fkxvdxn9t3",
    },
    {
      id: 4,
      name: "Armin",
      imageFront: require("./backImages/armin-b.jpg"),
      imageBack: require("./backImages/armin-b.jpg"),
      lightning: "bitcoinblockmunich@geyser.fund",
    },
    {
      id: 5,
      name: "Tobi",
      imageFront: require("./backImages/tobi-b copy.jpg"),
      imageBack: require("./backImages/tobi-b copy.jpg"),
      lightning: "blockzeit@getalby.com",
    },
    {
      id: 6,
      name: "Edwin",
      imageFront: require("./backImages/edwin-b.jpg"),
      imageBack: require("./backImages/edwin-b.jpg"),
      lightning: "satoshiskidzz@ln.tips",
    },
  ];
  return (
    <>
      <TitleBox id="workshop">
        <WorkshopTitle>Workshop</WorkshopTitle>
      </TitleBox>
      <Title>
        <Subtitle>
          Alle Workshopleiter spenden Zeit, Wissen und tragen ihre Reisekosten
          selbst. Lass ihnen bitte eine direkte Aufmerksamkeit dafür zukommen.
          Du kannst auch eine Nachricht (note) hinterlassen.{" "}
        </Subtitle>
      </Title>
      <Directory categories={workshopAr} />
      <List>
        <ListItem>
          <Link href="/">Zurück</Link>
        </ListItem>
      </List>
    </>
  );
};

export default Workshop;

const TitleBox = styled.div`
  margin-top: 5rem;
  width: 100vw;
  height: 2.5rem;
  background-color: #000;
  text-transform: uppercase;
  font-weight: 700;
`;

const WorkshopTitle = styled.div`
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
