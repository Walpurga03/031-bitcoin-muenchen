import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory";

const Speaker = () => {
  const speakerAr = [
    {
      id: 111,
      name: "Pascal & Moritz",
      imageFront: require("./frontImages/pasc-moe.jpg"),
      lightning: "bitcoinblockmunich@geyser.fund",
      twitter: "https://twitter.com/conshax",
    },
    {
      id: 112,
      name: "Christian Neurauter",
      imageFront: require("./frontImages/christian.png"),
      imageBack: require("./backImages/christian-b.jpg"),
      lightning:
        "LNURL1DP68GURN8GHJ7CTSDYHX7UR9DEHX7ER99E3K7MF0WCEZ7MRWW4EXCTTSV9UJ7VPJ8YENSWRYV5KNSCFJ8QKNGVTPXGKNSWF4V5KKXDNYVFJKGD35X4NXXVSEAZRKA",
      twitter: "https://twitter.com/Cryp_Donate",
    },
    {
      id: 1,
      name: "Andreas Streb",
      imageFront: require("./frontImages/andreas-1.jpeg"),
      imageBack: require("./backImages/andreas-b.jpg"),
      lightning:
        "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhk2anpwd5hvetnw3hhy7fjxyms360d",
      twitter: "https://twitter.com/andreas_streb",
    },
    {
      id: 2,
      name: "Leon Wankum",
      imageFront: require("./frontImages/leon.jpg"),
      imageBack: require("./backImages/leon-b.jpg"),
      lightning: "law@getalby.com",
      twitter: "https://twitter.com/leonamschel",
    },
    {
      id: 3,
      name: "Margot Paez",
      imageFront: require("./frontImages/margot.jpg"),
      imageBack: require("./backImages/margot-b.jpg"),
      lightning:
        "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhk66tvv3ex2ur0wf6rqvsrfmgs7",
      twitter: "https://twitter.com/jyn_urso",
    },
    {
      id: 4,
      name: "Joe Martin",
      imageFront: require("./frontImages/joe.jpg"),
      imageBack: require("./backImages/joe-b.jpg"),
      lightning: "joemartin@getalby.com",
      twitter: "https://twitter.com/JoeMartinDE",
    },
    {
      id: 5,
      name: "Lina Seiche",
      imageFront: require("./frontImages/lina.jpg"),
      imageBack: require("./backImages/lina-b.jpg"),
      lightning: "Willfulparade98@walletofsatoshi.com",
      twitter: "https://twitter.com/search?q=%40LinaSeiche&src=typed_query",
    },
    {
      id: 7,
      name: "Rachel Geyer",
      imageFront: require("./frontImages/rachel.jpg"),
      imageBack: require("./backImages/rachel-b.jpg"),
      lightning: "Rachelgeyer@getalby.com",
      twitter: "https://twitter.com/geyer_rachel",
    },
    {
      id: 9,
      name: "Harald Rauter",
      imageFront: require("./frontImages/harald.jpg"),
      imageBack: require("./backImages/harald-b.jpg"),
      lightning: "bitcoinblockmunich@geyser.fund",
      twitter: "https://twitter.com/HaraldRauter",
    },
    {
      id: 10,
      name: "Daniel Wingen",
      imageFront: require("./frontImages/daniel.jpg"),
      imageBack: require("./backImages/daniel-b.jpg"),
      lightning: "bitcoinblockmunich@geyser.fund",
      twitter: "https://twitter.com/danielwingen",
    },
    {
      id: 11,
      name: "Tobi",
      imageFront: require("./frontImages/tobi.jpg"),
      imageBack: require("./backImages/tobi-b.jpg"),
      lightning: "blockzeit@getalby.com",
      twitter: "https://twitter.com/Blockzeit_BTC",
    },
    {
      id: 12,
      name: "Amanda Cavaleri",
      imageFront: require("./frontImages/amanda.jpg"),
      imageBack: require("./backImages/amanda-b.jpg"),
      lightning:
        "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhk27rsdaek2er5v95kcvfhc9vss7",
      twitter: "https://twitter.com/Amanda_Cavaleri",
    },
    {
      id: 13,
      name: "Jörg Hermsdorf",
      imageFront: require("./frontImages/jörg.png"),
      imageBack: require("./backImages/joerg-b.jpg"),
      lightning: "easternconifer15@walletofsatoshi.com",
      twitter: "",
    },
    {
      id: 20,
      name: "Thesi Relingen-Prinz",
      imageFront: require("./frontImages/theresa.jpg"),
      imageBack: require("./backImages/theresa-b.jpg"),
      lightning: "tvrp@getalby.com",
      twitter: "https://twitter.com/ThesiPrinz",
    },
    {
      id: 24,
      name: "Jason Maier",
      imageFront: require("./frontImages/jason.jpg"),
      imageBack: require("./backImages/jason-b.jpg"),
      lightning: "bitcoinblockmunich@geyser.fund",
      twitter: "https://twitter.com/cjasonmaier",
    },
    {
      id: 27,
      name: "Eva Brauckmann",
      imageFront: require("./frontImages/eva.png"),
      imageBack: require("./backImages/eva-b.jpg"),
      lightning: "eva@getalby.com",
      twitter: "https://twitter.com/einemillionsats",
    },
    {
      id: 28,
      name: "Marc",
      imageFront: require("./frontImages/marc.png"),
      imageBack: require("./backImages/marc-b.jpg"),
      lightning:
        "LNURL1DP68GURN8GHJ7MRW9E6XJURN9UH8WETVDSKKKMN0WAHZ7MRWW4EXCUP0X9URJEFHXUMNGCNYVS6XYE3JX5MRZT270M9",
      twitter: "https://twitter.com/PrincessPlo",
    },
  ];
  return (
    <>
      <TitleBox id="speaker">
        <SpeakerTitle>Speaker</SpeakerTitle>
      </TitleBox>
      <Title>
        <Subtitle>
          Alle Speaker arbeiten ohne ihre übliche Gage und tragen ihre
          Reisekosten selbst. Lass ihnen bitte eine direkte Aufmerksamkeit dafür
          zukommen. Du kannst auch eine Nachricht (note) hinterlassen.
        </Subtitle>
      </Title>
      <Directory categories={speakerAr} />
      <List>
        <ListItem>
          <Link href="/">Zurück</Link>
        </ListItem>
      </List>
    </>
  );
};

export default Speaker;

const TitleBox = styled.div`
  margin-top: 5rem;
  width: 100vw;
  height: 2.5rem;
  background-color: #000;
  text-transform: uppercase;
  font-weight: 700;
`;

const SpeakerTitle = styled.div`
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
