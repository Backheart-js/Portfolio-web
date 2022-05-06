import React from 'react';

import './index.scss';

function Description(props) {

  return (
    <React.Fragment>
      <h3 className="about-content">
        {props.type}
      </h3>
    </React.Fragment>
  )
}

export default Description