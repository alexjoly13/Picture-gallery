import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            ImageDigger
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item active">
                <NavLink className="nav-link" exact to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  name="sports"
                  to="/sports"
                  onClick={event => this.props.onLink(event)}
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  name="nature"
                  to="/nature"
                  onClick={event => this.props.onLink(event)}
                >
                  Nature
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  name="cars"
                  to="/cars"
                  onClick={event => this.props.onLink(event)}
                >
                  Cars
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="slogan">The greatest image DataBase !</p>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" />
          <Route path="/sports" />
          <Route path="/nature" />
          <Route path="/cars" />
        </Switch>
      </div>
    );
  }
}

export default Navbar;
