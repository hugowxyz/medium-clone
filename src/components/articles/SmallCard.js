import React from 'react';
import { Link } from 'react-router-dom'
import ArticleFooter from './ArticleFooter'

import './SmallCard.scss'

const SmallCard = ({ blogUrl, coverUrl, titleClamp, metadata}) => {
  return (
    <article className="hero-smallCard">
      <div className="hero-post">
        
        <Link to={blogUrl}>
          <div className='hero-image' style={{
            backgroundImage: `url(${coverUrl})`,
            backgroundSize: 'cover'
          }}>
          </div>
        </Link>

        <div className="hero-postContent">
          
          <div className="hero-titleClamp">

            <Link to={blogUrl}>
              <h2>{titleClamp.title}</h2>
            </Link>

          </div>

          <ArticleFooter {...metadata} />

        </div>

      </div>
    </article>
  );
};

export default SmallCard;