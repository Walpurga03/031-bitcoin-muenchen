import "./App.css";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Podcast from "./pages/podcast/Podcast";
import PowPartner from "./pages/powPartner/PowPartner";
import Speaker from "./pages/speaker/Speaker";
import Workshop from "./pages/workshop/Workshop";
import Balken from "./components/navigation/Balken";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/speaker">
            <Balken />
            <Speaker />
          </Route>
          <Route path="/workshop">
            <Balken />
            <Workshop />
          </Route>
          <Route path="/podcast">
            <Balken />
            <Podcast />
          </Route>
          <Route path="/powPartner">
            <Balken />
            <PowPartner />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
