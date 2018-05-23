import React from 'react';
import SocialBar from '../SocialBar/SocialBar';
import './_footer.scss';

const Footer = ({ social }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <SocialBar social={social} />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
