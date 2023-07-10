import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  About,
  Connexion,
  Contact,
  Footer,
  Home,
  Navbar,
  Services,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="main">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Connexion />
          </Route>

          {/* <Route exact path="/service/:name">
            <ServiceDetail />
          </Route> */}
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default App;
