import React from 'react';
import { Link } from 'react-router-dom'

import './ArticleFooter.scss'

const ArticleFooter = ({user, date, length}) => {
  const userUrl = `/users/${user}`
  return (
    <div className="hero-card--footer ui-scale">
      
      <Link to={userUrl}>
        <button className='link mt-2 mb-1'>
          {user}
        </button>
      </Link>
      
      <small className="d-block text-muted"> 
        
        {date ? date : null}
        
        {length ? 
        
        <span>
          
          <span className="ml-2 mr-2">&middot;</span>
          <span> {length} min read </span>
        
        </span> : null
        
        } 
      
      </small>
      
    </div>
  );
};

export default ArticleFooter;