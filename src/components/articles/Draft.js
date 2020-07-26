import React from 'react';
import { Link } from 'react-router-dom'

import './Draft.scss'

const Draft = () => {
  return (
    <div className="draft">
      <Link>
        <h3> Draft </h3>
      </Link>
      
      <p className="text-muted"> The making of a draft </p>
      <small className="d-block text-muted ui-scale mt-1"> 
        <span>Published on 25 July 2020</span>
        <span className="ml-2 mr-2">&middot;</span>
        <span>6 min read</span>
      </small>
      <hr/>
    </div>
  );
};

export default Draft;