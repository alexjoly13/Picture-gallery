import React, { Component } from "react";
import "./App.css";
import sourceData from "./data.json";
import Navbar from "./components/Navbar";
import FilterBox from "./components/FilterBox";
import ImageTable from "./components/ImageTable";
import Pagination from "./components/Pagination";

class App extends Component {
  state = {
    imageData: sourceData,
    pageStart: 0,
    pageLast: 9,
    currentPage: sourceData.slice(0, 9),
    categories: ["sports", "nature", "cars"],
    filters: {
      sports: true,
      nature: true,
      cars: true
    }
  };

  genericOnChange(event) {
    const { name, checked } = event.target;
    let updatedFilter = [];
    this.setState(
      {
        pageStart: 0,
        pageLast: 9,
        filters: Object.assign({}, this.state.filters, {
          [name]: checked
        })
      },
      () => {
        const { filters } = this.state;
        updatedFilter = Object.keys(filters)
          .filter(function(key) {
            return filters[key];
          })
          .map(String);
        this.setState(
          {
            categories: updatedFilter
          },
          () => {
            const { categories } = this.state;
            const selection = sourceData.filter(oneContact => {
              return categories.includes(oneContact.category);
            });

            this.setState(
              {
                imageData: selection
              },
              () => {
                const { imageData } = this.state;
                const page = imageData.slice(0, 9);
                this.setState({
                  currentPage: page
                });
              }
            );
          }
        );
      }
    );
  }

  genericSwitch(event) {
    const { name } = event.target;
    const { filters } = this.state;
    var updatedFilter = [];
    Object.keys(filters).forEach(key => {
      if (filters[key]) filters[key] = false;
    });
    this.setState(
      {
        pageStart: 0,
        pageLast: 9,
        filters: Object.assign({}, this.state.filters, {
          [name]: true
        })
      },
      () => {
        const { filters } = this.state;

        updatedFilter = Object.keys(filters)
          .filter(function(key) {
            return filters[key];
          })
          .map(String);
        this.setState(
          {
            categories: updatedFilter
          },
          () => {
            const { categories } = this.state;
            const selection = sourceData.filter(oneContact => {
              return categories.includes(oneContact.category);
            });
            this.setState(
              {
                imageData: selection
              },
              () => {
                const { imageData } = this.state;
                const page = imageData.slice(0, 9);
                this.setState({
                  currentPage: page
                });
              }
            );
          }
        );
      }
    );
  }

  genericImageSelector(pageStartIndex, pageLastIndex) {
    const { imageData } = this.state;
    this.setState({
      pageStart: pageStartIndex,
      pageLast: pageLastIndex,
      currentPage: imageData.slice(pageLastIndex - 9, pageLastIndex)
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar onLink={event => this.genericSwitch(event)} />
        <FilterBox
          filters={this.state.filters}
          onBox={event => this.genericOnChange(event)}
        />
        <ImageTable imageData={this.state.currentPage} />
        <Pagination
          products={(event, pageStartIndex, pageLastIndex) =>
            this.genericImageSelector(event, pageStartIndex, pageLastIndex)
          }
          imageData={this.state.imageData}
        />
      </div>
    );
  }
}

export default App;
