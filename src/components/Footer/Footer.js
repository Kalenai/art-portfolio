import React from 'react';
import SocialBar from '../SocialBar/SocialBar';
import './_footer.scss';

const Footer = ({ social }) => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          &copy; 2018 Laci Davis
          <br />
          Built on Gatsby.js by <a
            href="https://github.com/Kalenai/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Jed Davis
          </a>
        </div>
        <div className="col-sm">
          <div className="footer-content">
            <SocialBar social={social} />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
