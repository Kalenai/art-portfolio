import React, { Component } from 'react';
import SocialBar from '../SocialBar/SocialBar';
import './_header.scss';

class Header extends Component {
  state = {
    showMenu: false
  };

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const activeMenu = this.state.showMenu ? 'is-active' : '';

    return (
      <header className="header">
        <nav className="navbar is-primary" aria-label="main navigation">
          <div className="navbar-brand">
            <a href="" className="navbar-item">
              Laci Davis
            </a>
            <a
              role="button"
              className={`navbar-burger ${activeMenu}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={`navbar-menu ${activeMenu}`}>
            <div className="navbar-start">
              <a href="#work" className="navbar-item">
                Work
              </a>
              <a href="#contact" className="navbar-item">
                Contact
              </a>
              <a href={this.props.resume.publicURL} className="navbar-item">
                Resume
              </a>
            </div>
            <div className="navbar-end">
              <SocialBar social={this.props.social} />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
