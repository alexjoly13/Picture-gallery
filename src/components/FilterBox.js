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
                onChange={event => this.props.onBox(event)}
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
                onChange={event => this.props.onBox(event)}
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
                onChange={event => this.props.onBox(event)}
                name="cars"
              />
              <span className="slider round" />
            </label>
          </li>

          {/* <label className="checkbox">
            <input
              type="checkbox"
              checked={this.props.filters.sports}
              onChange={event => this.props.onBox(event)}
              name="sports"
            />
            <p className="category">Sports</p>
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={this.props.filters.nature}
              onChange={event => this.props.onBox(event)}
              name="nature"
            />
            <p className="category">Nature</p>
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={this.props.filters.cars}
              onChange={event => this.props.onBox(event)}
              name="cars"
            />
            <p className="category">Cars</p>
          </label> */}
        </form>
      </section>
    );
  }
}

export default FilterBox;
