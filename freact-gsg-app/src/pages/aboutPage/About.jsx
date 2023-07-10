import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const aboutInfo = {
  name: "Yousef",
  age: 34,
  possitin: "Software Engineer",
};
export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>{`My name is ${aboutInfo.name}`} </p>
        <Footer />
      </div>
    );
  }
}
