import React, { Component } from "react";
import "./App.css";
import sourceData from "./data.json";
import Navbar from "./components/Navbar";
import FilterBox from "./components/FilterBox";
import ImageTable from "./components/ImageTable";

class App extends Component {
  state = {
    imageData: sourceData,
    pageStart: 0,
    pageLast: 5,
    currentPage: sourceData.slice(0, 9),
    categories: ["sports", "nature", "cars"],
    filters: {
      sports: true,
      nature: true,
      cars: true
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <FilterBox filters={this.state.filters} />
        <ImageTable imageData={this.state.imageData} />
      </div>
    );
  }
}

export default App;
