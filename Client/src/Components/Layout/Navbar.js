import React, {Component} from 'react';
import M from "materialize-css";
import logo from "../../images/Logo.png";
import {Link} from "react-router-dom";


class Navbar extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems);
    }

    render() {
        return (
            <div>

            <nav className="nav-wrapper teal lighten-2 z-depth-1">
              <div className="container">
                  <img src={logo} alt="Logo" className="hide-on-med-and-down brand-logo left" style={{height:64}}/>

                  <a href="#" className="sidenav-trigger" data-target="mobile-links">
                      <i className="material-icons">menu</i>
                  </a>

                  <ul className="left hide-on-large-only">
                      <li>
                          <form>
                              <div className="input-field">
                                  <input id="search" type="search" required/>
                                  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                  <i className="material-icons">close</i>
                              </div>
                          </form>
                      </li>
                  </ul>
                  <ul className="right hide-on-med-and-down">
                      <li><Link className="black-text" to="/">Home</Link></li>
                      <li><Link className="black-text" to="/about">About</Link></li>
                      <li><Link className="black-text" to="/contact"> Contact</Link></li>
                      <li><Link className="black-text" to="/login">Login </Link></li>
                      <li>
                          <form>
                              <div className="input-field">
                                  <input id="search" type="search" required/>
                                      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                      <i className="material-icons">close</i>
                              </div>
                          </form>
                      </li>
                  </ul>
              </div>
              </nav>
                    <ul className="sidenav" id="mobile-links">
                        <li><Link className="black-text" to="/">Home</Link></li>
                        <li><Link className="black-text" to="/about">About</Link></li>
                        <li><Link className="black-text" to="/contact"> Contact</Link></li>
                        <li><Link className="black-text" to="/login">Login </Link></li>
                    </ul>

            </div>
        );
    }
}

export default Navbar;