import "./App.css";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Podcast from "./pages/podcast/Podcast";
import PowPartner from "./pages/powPartner/PowPartner";
import Speaker from "./pages/speaker/Speaker";
import Workshop from "./pages/workshop/Workshop";

function App() {
  return (
    <>
      <Home />
      <Navigation>
        <List>
          <ListItem>
            <Link href="#speaker">Speaker</Link>
          </ListItem>
          <ListItem>
            <Link href="#workshop">Workshop</Link>
          </ListItem>
          <ListItem>
            <Link href="#podcast">Podcast</Link>
          </ListItem>
          <ListItem>
            <Link href="#powPartner">Pow-Partner</Link>
          </ListItem>
        </List>
      </Navigation>
      <Speaker />
      <Workshop />
      <Podcast />
      <PowPartner />
      <Footer />
    </>
  );
}

export default App;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-bottom: 2rem;
`;
const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ListItem = styled.li`
  display: inline-block;
  background-color: #000;
  margin-left: 3rem;
  width: 10rem;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  border: solid 3px #000;
  &:hover {
    background: #ffe700;
  }
  @media (max-width: 850px) {
    margin-left: 0.5rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 700px) {
    margin-left: 0;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;
const Link = styled.a`
  text-align: center;
  display: block;
  font-size: 1.5rem;
  color: #ffe700;
  text-decoration: none;
  box-sizing: border-box;
  ${ListItem}:hover & {
    color: #000;
  }
`;
