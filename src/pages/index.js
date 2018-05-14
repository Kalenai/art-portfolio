/* global graphql */

import React from 'react';
import About from '../components/About/About';
// import HowTo from '../components/how-to';

const IndexPage = props => (
  <main>
    <About data={props.data.allDataJson.edges[0].node.about} />
    {/* <Features data={props.data.allDataJson.edges[0].node.features} />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} /> */}
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          about {
            title
          }
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
