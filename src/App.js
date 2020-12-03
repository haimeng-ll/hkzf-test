import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import City from "./views/City";
import Map from "./views/Map";
import NotFound from "./views/NotFound";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/map" component={Map}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}
