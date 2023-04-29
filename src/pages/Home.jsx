import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card";

const Home = () => {
  return (
    <>
      <Title>Speaker/Workshops</Title>
      <Card />
    </>
  );
};

export default Home;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
  @media (max-width: 330px) {
    font-size: 1.5rem;
  }
`;
