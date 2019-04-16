import React, { Component } from "react";

import "./FilterBox.css";

class FilterBox extends Component {
  render() {
    return (
      <section className="filter-nav">
        <h2 className="page-title">Choose please</h2>
        <form>
          <label>
            <input
              type="checkbox"
              checked={this.props.filters.sports}
              onChange={event => this.props.onBox(event)}
              name="women"
            />
            <p className="paragraph">Sports</p>
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.props.filters.nature}
              onChange={event => this.props.onBox(event)}
              name="men"
            />
            <p className="paragraph">Nature</p>
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.props.filters.cars}
              onChange={event => this.props.onBox(event)}
              name="other"
            />
            <p className="paragraph">Cars</p>
          </label>
        </form>
      </section>
    );
  }
}

export default FilterBox;
