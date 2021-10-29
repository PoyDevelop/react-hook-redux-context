import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import NotFound from "./components/layout/NotFound";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route component={NotFound} />
      </Switch>
    </Router>

  );
}

export default App;
