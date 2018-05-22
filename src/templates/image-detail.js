import React from 'react';
import './_image-detail.scss';

export default (props) => {
  const { frontmatter, html } = props.data.markdownRemark;
  const { src, srcSet, sizes } = frontmatter.image.childImageSharp.sizes;

  return (
    <div>
      <img src={src} srcSet={srcSet} sizes={sizes} alt="" />
      {frontmatter.title ? <h3>{frontmatter.title}</h3> : null}
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : null}
    </div>
  );
};

export const query = graphql`
  query ImageDetailQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
        title
      }
      html
    }
  }
`;
