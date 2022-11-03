import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.png';
import '../styles/components/Nav.scss';

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <NavLink to={'/'}>
            <img
              className="nav__logo"
              src={logo}
              alt="Home"
              title="Go to Home"
            />
          </NavLink>
        </li>
        <NavLink to={'/characterList'}>
          <li className="nav__link" title="Go to Characters">
            Characters
          </li>
        </NavLink>
        <NavLink to={'/info'}>
          <li className="nav__link" title="Go to Info">
            Information
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
