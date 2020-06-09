import React from 'react';
import './Tertiary.css'
import ArticleFooter from './ArticleFooter'
import getBgColor from '../utilities/getBgColor'

const Tertiary = ({title, teaser, metadata}) => {
  const bg = getBgColor()
  
  return (
    <article className="tertiary-f">
      <div className="image-header mb-2" style={bg}></div>
      <h4>{title}</h4>
      <p className="text-muted">{teaser}</p>
      <ArticleFooter {...metadata}/>
    </article>
  );
};

export default Tertiary;