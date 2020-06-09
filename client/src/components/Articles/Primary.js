import React from 'react';
import getBgColor from '../utilities/getBgColor'

import './Primary.css'

import ArticleFooter from './ArticleFooter';

const Primary = ({title, teaser, metadata}) => {
  const bg = getBgColor()

  return (
    <article className="primary-f">
      <div className="image-header" style={bg}></div>
      <div className="article-body">
        <h3><a href="#a">{title}</a></h3>
        <p className="text-muted">{teaser}</p>
        <ArticleFooter {...metadata} />
      </div>
    </article>
  );
};

export default Primary;