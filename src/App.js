import React from "react";
import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/" className="popup a">
          Go to Page 1{" "}
        </Link>
        <Link to="/page2" className="popup b">
          Go to Page 2{" "}
        </Link>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route path="/" component={Page1} />
        </Switch>
      </div>
    );
  }
}

export default App;
