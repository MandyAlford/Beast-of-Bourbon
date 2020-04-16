
import './App.css';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Header from "../Header/Header";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Route path='/' exact>
        <Header />
      </Route>  
    )
  }
}

export default App;
