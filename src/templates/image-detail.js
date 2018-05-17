import React from 'react';
import Img from 'gatsby-image';

export default ({ data }) => {
  const listing = data.markdownRemark;
  return (
    <div>
      <img src={listing.frontmatter.image} />
      <h3>{listing.frontmatter.title}</h3>
    </div>
)};

export const query = graphql`
  query ImageDetailQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image
        title
      }
    }
  }
`;
