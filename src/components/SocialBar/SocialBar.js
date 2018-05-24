import React from 'react';
import Icon from '../icon';
import InstagramIcon from '../icon/instagram.icon';
import TwitterIcon from '../icon/twitter.icon';
import TumblrIcon from '../icon/tumblr.icon';
import BehanceIcon from '../icon/behance.icon';
import './_socialbar.scss';

const SocialBar = (props) => {
  const { instagram, twitter, tumblr, behance } = props.social.siteMetadata.social;

  return (
    <React.Fragment>
      {instagram ?
        <a
          className="social-link navbar-item"
          href={`https://www.instagram.com/${instagram}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={InstagramIcon} width={24} height={24} fill={'#fff'} />
        </a> : null}
      {twitter ?
        <a
          className="social-link navbar-item"
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={TwitterIcon} width={24} height={24} fill={'#fff'} />
        </a> : null}
      {tumblr ?
        <a
          className="social-link navbar-item"
          href={`https://${tumblr}.tumblr.com/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={TumblrIcon} width={24} height={24} fill={'#fff'} />
        </a> : null}
      {behance ?
        <a
          className="social-link navbar-item"
          href={`https://www.behance.net/${behance}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={BehanceIcon} width={24} height={24} fill={'#fff'} />
        </a> : null}
    </React.Fragment>
  );
};

export default SocialBar;
