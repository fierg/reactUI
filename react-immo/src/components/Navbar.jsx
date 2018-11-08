import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter
} from "react-router-dom";


class Navbar extends Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">
                Lux Real Estate
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

          </div>
        </React.Fragment>
      </Router>
    );
  }

}

export default Navbar;