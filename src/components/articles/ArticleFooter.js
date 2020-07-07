import React from 'react';

import { Link } from 'react-router-dom'

const ArticleFooter = ({user, date, length}) => {
  const userUrl = `/users/${user}`
  return (
    <div className="article-footer">
      <Link to={userUrl}><button>{user}</button></Link>
      
      <p className="text-muted">
        {date}
        <span className="ml-2 mr-2">&middot;</span>
        {length} min read
      </p>
      
    </div>
  );
};

export default ArticleFooter;