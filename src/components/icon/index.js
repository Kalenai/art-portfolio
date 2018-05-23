import React from 'react';

const Icon = props => (
  <svg viewBox={props.icon.viewBox}>
    <use xlinkHref={`#${props.icon.id}`} />
  </svg>
);

export default Icon;
