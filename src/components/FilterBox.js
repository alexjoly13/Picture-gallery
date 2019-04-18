import React, { Component } from "react";

import "./FilterBox.css";

class FilterBox extends Component {
  render() {
    return (
      <section className="filter-nav">
        <h2 className="title">Feel free to browse ImageDigger !</h2>
        <form className="form-block">
          <li className="list-group-item">
            <span className="filter-descr">Sports</span>
            <label className="switch ">
              <input
                type="checkbox"
                className="primary"
                checked={this.props.filters.sports}
                onChange={event => this.props.boxChecking(event)}
                name="sports"
              />
              <span className="slider round" />
            </label>
          </li>
          <li className="list-group-item">
            <span className="filter-descr">Nature</span>
            <label className="switch ">
              <input
                type="checkbox"
                className="primary"
                checked={this.props.filters.nature}
                onChange={event => this.props.boxChecking(event)}
                name="nature"
              />
              <span className="slider round" />
            </label>
          </li>
          <li className="list-group-item">
            <span className="filter-descr">Cars</span>
            <label className="switch ">
              <input
                type="checkbox"
                className="primary"
                checked={this.props.filters.cars}
                onChange={event => this.props.boxChecking(event)}
                name="cars"
              />
              <span className="slider round" />
            </label>
          </li>
        </form>
      </section>
    );
  }
}

export default FilterBox;
