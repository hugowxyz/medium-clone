import React from 'react';

import './ArticleFooter.css'

const ArticleFooter = ({publisher, date, length}) => {
  return (
    <div className="article-footer">
      <a href="#a">{publisher}</a>
      <p className="text-muted">
        {date}
        <span className="ml-2 mr-2">&middot;</span>
        {length} min read
      </p>
    </div>
  );
};

export default ArticleFooter;