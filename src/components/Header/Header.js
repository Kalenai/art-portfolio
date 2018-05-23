import React from 'react';
import Link from 'gatsby-link';

import './_header.scss';

const Header = props => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h3 className="header-logo">Laci Davis</h3>
        </div>
        <nav className="col-sm">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a className="header-nav-link" href="#work">
                My Work
              </a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-link" href={props.resume.publicURL}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
