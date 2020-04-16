
import './App.css';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
      <Route path='/' exact>
        <Header />
        <CardContainer />
      </Route>
      </main>
    )
  }
}

export default App;
