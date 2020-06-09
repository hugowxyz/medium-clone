import React from 'react';
import './MainA.css'
import ArticleFooter from './ArticleFooter'
import getBgColor from '../utilities/getBgColor'

const MainA = ({title, teaser, metadata}) => {
  const bg = getBgColor()

  return (
    <article className='main-a'>
      <div className="row">
        <div className="col-8">
          <p className="text-muted">{metadata.why}</p>
          <h5>{title}</h5>
          <p className="text-muted">{teaser}</p>
          <ArticleFooter {...metadata} />
        </div>
        <div className="row-4">
          <div className="image-header" style={bg}></div>
        </div>
      </div>
    </article>
  );
};

export default MainA;