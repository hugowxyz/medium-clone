import React from 'react';
import './PopularEntry.css'
import ArticleFooter from '../Articles/ArticleFooter'

const PopularEntry = ({ordinal, title, metadata}) => {
  return (
    <div className="entry-p">
      <div className="row">
        <div className="ordinal col-2 b text-muted">{ordinal}</div>
        <div className="col-10">
          <h6>{title}</h6>
          <ArticleFooter {...metadata} />
          </div>
      </div>
    </div>
  );
};

export default PopularEntry;