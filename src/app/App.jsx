import React from "react";
import "./App.scss";
import HeaderContainer from "../components/header/HeaderContainer";
import ContentContainer from '../components/content/ContentContainer'
import GlobalContainer from '../components/GlobalContainer'
import { Redirect, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="app">
      <HeaderContainer />
      <main className="app-content">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/content" />
          </Route>
          <Route path="/content">
            <GlobalContainer>
              <Route
                path="/content/:customParam?"
                component={ContentContainer}
              />
            </GlobalContainer>
          </Route>
          <Route path="/">
            <p className="error-message">
              Oups, quelque chose s'est mal passé... 🤕
            </p>
          </Route>
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;