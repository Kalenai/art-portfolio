/* global graphql */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="Laci Davis"
    />
    <Header social={data.social} resume={data.resume} />
    {children()}
    <Footer social={data.social} />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query IndexLayoutQuery {
    social: site {
      siteMetadata {
        social {
          instagram
          twitter
          tumblr
          behance
        }
      }
    }
    resume: file(name: { regex: "/Resume/"}) {
      publicURL
    }
  }
`;
