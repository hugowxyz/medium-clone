import React from 'react';
import { Link } from 'react-router-dom'
import ArticleFooter from './ArticleFooter'

import './SmallCard.scss'

const SmallCard = ({ blogUrl, coverUrl, titleClamp, metadata}) => {
  return (
    <article className="hero-card--small ui-scale">
          
        <div className="hero-meta">

          <Link to={blogUrl}>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </Link>

        </div>

        <ArticleFooter {...metadata} />

    </article>
  );
};

export default SmallCard;