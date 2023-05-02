import CategoryItem from "../category-Item/CategoryItem";
import styled from "styled-components";

const Directory = ({ categories }) => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Directory;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
