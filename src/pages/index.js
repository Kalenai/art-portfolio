/* global graphql */

import React from 'react';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';

const IndexPage = props => (
  <main>
    <About blurb={props.data.aboutBlurb.about[0].title} />
    <Gallery images={props.data.images} />
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    aboutBlurb: dataJson {
      about {
        title
      }
    }
    images: file(relativePath: { eq: "/img/*" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allDataJson {
//       edges {
//         node {
//           features {
//             title
//           }
//           howTo {
//             title
//           }
//         }
//       }
//     }
//   }
// `;
