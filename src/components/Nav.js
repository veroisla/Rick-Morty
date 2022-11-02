import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import '../styles/components/Nav.scss';

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to={'/'}>
            <img
              className="nav__logo"
              src={logo}
              alt="Home"
              title="Go to Home"
            />
          </Link>
        </li>
        <Link to={'/characterList'}>
          <li className="nav__link" title="Go to Characters">
            Characters
          </li>
        </Link>
        <Link to={'/info'}>
          <li className="nav__link" title="Go to Info">
            Information
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
