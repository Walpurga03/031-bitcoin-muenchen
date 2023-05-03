import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory";

const PowPartner = () => {
  const powPartnerAr = [
    {
      id: 2,
      name: "Getränke Wimmer",
      imageFront: require("./frontImages/Wimmer.png"),
      imageBack: require("./frontImages/Wimmer.png"),
      lightning:
        "lnbc1pjy8l7fpp59n3sxm644wh285z4vlj48c6zjrt0k76edl8yp2dmrmxhn06h02kqdqqcqzzgxqyz5vqrzjqwnvuc0u4txn35cafc7w94gxvq5p3cu9dd95f7hlrh0fvs46wpvhdscspm5k9ztcjcqqqqryqqqqthqqpyrzjqw8c7yfutqqy3kz8662fxutjvef7q2ujsxtt45csu0k688lkzu3ldscspm5k9ztcjcqqqqryqqqqthqqpysp583tkcrturgfmytvsp0nqqe3jndmu2lydj0zzyfjd4gzv7z4fqpms9qypqsqwc5gsk6kh0tvwqa0sx0wayl5vduv9zzueyhgy4dfs54nkd0vx35smjmdcr05d5kggyz6cq8rp5q0gqvnjenwugrltsg9nr28w26v4tqpdw4pp7",
    },
    {
      id: 3,
      name: "terahash",
      imageFront: require("./frontImages/terahash.png"),
      imageBack: require("./frontImages/terahash.png"),
      lightning: "saltowner17@walletofsatoshi.com",
    },
    {
      id: 5,
      name: "Satoshistore",
      imageFront: require("./frontImages/Satoshi-Store.png"),
      imageBack: require("./frontImages/Satoshi-Store.png"),
      lightning:
        "035ece5bb069d1fff9ba9fa3be5faf7b498188b9da08dc3b5aa99c31c9c77597ba@212.186.59.30:9735",
    },
    {
      id: 6,
      name: "green-bitcoin.farm",
      imageFront: require("./frontImages/Green-Mining-Farm.png"),
      imageBack: require("./frontImages/Green-Mining-Farm.png"),
      lightning:
        "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkxunpve68jargw4kkyvf38tje2g",
    },
    {
      id: 7,
      name: "Athletic Bean Coffee-Car",
      imageFront: require("./frontImages/Ape-Cafe.png"),
      imageBack: require("./frontImages/Ape-Cafe.png"),
      lightning: "awfulcheetah68@walletofsatoshi.com",
    },
    {
      id: 8,
      name: "Zeitsprung Bitcoin",
      imageFront: require("./frontImages/zsb.jpg"),
      imageBack: require("./frontImages/zsb.jpg"),
      lightning: "zeitsprungbitcoin@getalby.com",
    },
    {
      id: 9,
      name: "Bitcoin for Good",
      imageFront: require("./frontImages/bitcoin4good.png"),
      imageBack: require("./frontImages/bitcoin4good.png"),
      lightning: "sats@btcpay.bitcoin4good.de",
    },
    {
      id: 10,
      name: "Modeotec-art",
      imageFront: require("./frontImages/Modeotc-art.png"),
      imageBack: require("./frontImages/Modeotc-art.png"),
      lightning:
        "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkv6tjd4nxcmm0wg6rqwxfzks",
    },
    {
      id: 11,
      name: "Blockzeit.ch",
      imageFront: require("./frontImages/Blockzeit-ch.png"),
      imageBack: require("./frontImages/Blockzeit-ch.png"),
      lightning: "blockzeit@getalby.com",
    },
    {
      id: 12,
      name: "Painting Bitcoin",
      imageFront: require("./frontImages/PaintingBitcoin.png"),
      imageBack: require("./frontImages/PaintingBitcoin.png"),
      lightning: "partialmascara80@walletofsatoshi.com",
    },
    {
      id: 13,
      name: "Lina Seiche",
      imageFront: require("./frontImages/LittelHodler-New.png"),
      imageBack: require("./frontImages/LittelHodler-New.png"),
      lightning: "Willfulparade98@walletofsatoshi.com",
    },
    {
      id: 14,
      name: "Lipa",
      imageFront: require("./frontImages/Lipa.png"),
      imageBack: require("./frontImages/Lipa.png"),
      lightning: "bitcoinblockmunich@geyser.fund",
    },
    {
      id: 15,
      name: "Kurant",
      imageFront: require("./frontImages/Kurant.png"),
      imageBack: require("./frontImages/Kurant.png"),
      lightning: "bitcoinblockmunich@geyser.fund",
    },
    {
      id: 16,
      name: "21 Energy",
      imageFront: require("./frontImages/21energy.png"),
      imageBack: require("./frontImages/21energy.png"),
      lightning: "bitcoinblockmunich@geyser.fund",
    },
    {
      id: 17,
      name: "Filmcasino Dinnerclub",
      imageFront: require("./frontImages/Filmcasino.png"),
      imageBack: require("./frontImages/Filmcasino.png"),
      lightning: "bitcoinblockmunich@getalby.com",
    },
    {
      id: 19,
      name: "Bischof Automaten",
      imageFront: require("./frontImages/Bischof-Snack-Automaten.png"),
      imageBack: require("./frontImages/Bischof-Snack-Automaten.png"),
      lightning: "reneaaron@getalby.com",
    },
    {
      id: 22,
      name: "Abiona-It",
      imageFront: require("./frontImages/AbionaIT.png"),
      imageBack: require("./frontImages/AbionaIT.png"),
      lightning: "aimlessactor60@walletofsatoshi.com",
    },
  ];
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
