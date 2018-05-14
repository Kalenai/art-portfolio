import React from 'react';

import './_about.scss';

const About = props => (
  <section className="about">
    <div className="container">
      <div className="row">
        <h3 className="col-6 about-heading">{props.data[0].title}</h3>
      </div>
    </div>
  </section>
);

export default About;
