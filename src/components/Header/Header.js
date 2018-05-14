import React from 'react';

import './_header.scss';

const Header = () => (
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
              <a className="header-nav-link" href="#work">
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
