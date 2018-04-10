import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";

//main
import SkinType from "./main/SkinType";
import Finish from "./main/Finish";
import Results from "./main/Results";
import Layout from './Layout';

//secondary

//third

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: "skin-type", 
      skinType: "",
      finish: ""
    };
    this.changePlace = this.changePlace.bind(this);
  }
  changePlace(newLocation) {
    this.setState({
      location: newLocation
    });
  }
  render() {
    if (this.state.location === "skin-type") {
      return (
        <Layout>
          {" "}
          <SkinType changePlace={this.changePlace} onSkinType={(newSkinType) => this.setState({skinType: newSkinType})} />{" "}
        </Layout>
      );
    }
    if (this.state.location === "finish") {
      return (
        <Layout>
          <Finish changePlace={this.changePlace} onFinishType={(newFinishType) => this.setState({finish: newFinishType})} />{" "}
        </Layout>
      );
    }
    if (this.state.location === "Results") {
      return (
        <Layout>
          <Results changePlace={this.changePlace} {...this.state} />{" "}
        </Layout>
      );
    }
  }
}
export default App;
