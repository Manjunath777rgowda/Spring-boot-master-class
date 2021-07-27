import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Customer from "./customer/Customer";
import Navbar from "./navbar/Navbar";
import "./App.css";
import Merchant from "./merchant/Merchant";
import ServerStatus from "./commons/ServerStatus";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <ServerStatus />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/customer" component={Customer}></Route>
          <Route exact path="/merchant" component={Merchant}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
