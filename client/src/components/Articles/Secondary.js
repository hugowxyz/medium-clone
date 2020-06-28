import React from 'react';
import getBgColor from '../utilities/getBgColor'

import './Secondary.css'

import ArticleFooter from './ArticleFooter'

const Secondary = ({title, metadata}) => {
  const bg = getBgColor()

  return (
    <article className='secondary-f'>
      <div className="row">
        <div className="col-3">
          <div className="image-header" style={bg}></div>
        </div>
        <div className="col-9">
          <h4><a href="#a">{title}</a></h4>
          <ArticleFooter {...metadata} />
        </div>
      </div>
    </article>
  );
};

export default Secondary;