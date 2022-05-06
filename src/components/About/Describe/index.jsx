import React, { Fragment } from 'react';

import './index.scss';

function Describe() {
  return (
    <Fragment>
      <div className="desc-content">
        <h3>
          Nội dung mô tả bản thân
        </h3>
      </div>
      <div className="desc-avatar">
        <div className="avatar-wrapper">
          <div className="avatar-img"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Describe