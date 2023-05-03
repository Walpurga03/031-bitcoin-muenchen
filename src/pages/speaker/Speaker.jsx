import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory";

const Speaker = () => {
  const speakerAr = [
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
      lightning:
        "lnbc1pjyzc3cpp5tkruzt2ekg6xsk84t7568xklgrj970xaa8uac30zp0zlw84htc2sdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhdedryhn9askk7qqqqqryqqqqthqqpyrzjqw8c7yfutqqy3kz8662fxutjvef7q2ujsxtt45csu0k688lkzu3ldedryhn9askk7qqqqqryqqqqthqqpysp53cq2ydeukkuvw73yv6hvsd8hw2uj6qqve0q4u8klmcgc2yk7eggq9qypqsqvf9dzhkrcfyx4qqg4mqslkpkcq5lt28kx72nptmnzv28fy9lgqtzktf2f50kmc47mng45w2mp3h0rrpalu9pld5rklncdheqfzsw4eqqsrrqkc",
      twitter: "https://twitter.com/HaraldRauter",
    },
    {
      id: 10,
      name: "Daniel Wingen",
      imageFront: require("./frontImages/daniel.jpg"),
      imageBack: require("./backImages/daniel-b.jpg"),
      lightning:
        "lnbc1pjyzc3cpp5tkruzt2ekg6xsk84t7568xklgrj970xaa8uac30zp0zlw84htc2sdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhdedryhn9askk7qqqqqryqqqqthqqpyrzjqw8c7yfutqqy3kz8662fxutjvef7q2ujsxtt45csu0k688lkzu3ldedryhn9askk7qqqqqryqqqqthqqpysp53cq2ydeukkuvw73yv6hvsd8hw2uj6qqve0q4u8klmcgc2yk7eggq9qypqsqvf9dzhkrcfyx4qqg4mqslkpkcq5lt28kx72nptmnzv28fy9lgqtzktf2f50kmc47mng45w2mp3h0rrpalu9pld5rklncdheqfzsw4eqqsrrqkc",
      twitter: "https://twitter.com/danielwingen",
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
      id: 24,
      name: "Jason Maier",
      imageFront: require("./frontImages/jason.jpg"),
      imageBack: require("./backImages/jason-b.jpg"),
      lightning:
        "lnbc1pjyzm49pp5xvh7nctrhrnv5z0zyuw9cesxj5ka3v2qd7hszx6j4zjtat3p6wdqdqu2askcmr9wssx7e3q2dshgmmndp5scqzpgxqyz5vqsp5jqr0vm9xn2p82rsc60mpddcaltkvalrxfmf3yrtd05yshrn6v3aq9qyyssqrn0e49x9gvg37lg5ye50vr3hp9my4xspwffcghq98shaf45uxes3655wjfvpk53swnrtzpprahlq5krl5txzgd7gvsj40qgrrnhqrgqpa6v3a2",
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
  ];
  return (
    <>
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
