import React from 'react';
import { Link } from 'react-router-dom'

import './LargeCard.scss'

import ArticleFooter from './ArticleFooter';

const LargeCard = ({ blogUrl, coverUrl, titleClamp, metadata }) => {
  return (
    <article className="hero-largeCard">

      <div className="hero-post">
        
        <Link to={blogUrl}>
          <div className='hero-image' style={{
            backgroundImage: `url(${coverUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}></div>
        </Link>
        
        <div className="hero-postContent">
          
          <div className="titleClamp">
            
            <Link to={blogUrl}>
              <h1>{titleClamp.title}</h1>
            </Link>
            
            <Link to={blogUrl}>
              <button className='link text-muted'>{titleClamp.summary}</button>
            </Link>
          
          </div>

          <ArticleFooter {...metadata} />

        </div>
      
      </div>
    
    </article>
  );
};

export default LargeCard;