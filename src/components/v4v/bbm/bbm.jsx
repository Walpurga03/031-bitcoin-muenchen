import React from "react";
import CategoryItem from "../../category-Item/CategoryItem";
import styled from "styled-components";

const BbmCard = () => {
  const bbm = [
    {
      id: 1,
      imageUrl: require("../../../images/brezel.png"),
      image: require("../../../images/bild1.jpg"),
      name: "Alexander Moik",
      lightningAddress: "aldobarazutti@getalby.com",
      twitter:
        "https://twitter.com/BitcoinMunich?t=5r6-Wl_PxhSGo97H5rJQ9A&s=33",
    },
  ];

  return (
    <>
      <Container>
        {bbm.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </Container>
    </>
  );
};

export default BbmCard;

const Container = styled.div`
  width: 90%;
  margin: 2rem auto;
  background-color: blue;
`;
