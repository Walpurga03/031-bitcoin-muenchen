import React from "react";
import CategoryItem from "../category-Item/CategoryItem";
import styled from "styled-components";

const Card = () => {
  const categories = [
    {
      id: 1,
      imageUrl: require("../../images/speakeKlimaRauter.jpg"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
      nostr: "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
      telegram:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
    {
      id: 2,
      imageUrl: require("../../images/speakerUnternehmenWankum.jpg"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
      nostr: "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
      telegram:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
    {
      id: 3,
      imageUrl: require("../../images/speakerUnternehmenWingen.jpg"),
      LightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
      nostr: "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
      telegram:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
  ];
  return (
    <>
      <Container>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;
