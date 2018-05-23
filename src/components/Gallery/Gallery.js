import React from 'react';
import Link from 'gatsby-link';
import './_gallery.scss';

const Gallery = props => (
  <div>
    {props.images.map(({ node }) => {
      const { src, srcSet, sizes } = node.frontmatter.image.childImageSharp.sizes;
      const title = node.frontmatter.title;
      const slug = node.fields.slug;
      return (
        <Link to={slug} key={slug}>
          <img src={src} srcSet={srcSet} sizes={sizes} alt={title} />
        </Link>
      );
    })}
  </div>
);

export default Gallery;
