import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
//style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <main>
        <Switch>
          <Route path="/scoot" exact>
            <Home />
          </Route>
          <Route path="/scoot/about">
            <About />
          </Route>
          <Route path="/scoot/locations">
            <Locations />
          </Route>
          <Route path="/scoot/careers">
            <Careers />
          </Route>
        </Switch>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
