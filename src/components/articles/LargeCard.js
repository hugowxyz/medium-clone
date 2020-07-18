import React from 'react';
import { Link } from 'react-router-dom'

import './LargeCard.scss'

import ArticleFooter from './ArticleFooter';

const LargeCard = ({ blogUrl, coverUrl, meta, metadata }) => {
  return (
    <article className="hero-card--large ui-scale">
          
        <div className="hero-meta">
          
          <Link to='/'>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </Link>
          
          <Link to='/'>
            <button className='link text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugit?</button>
          </Link>
        
        </div>

        <ArticleFooter {...metadata} />

    </article>
  );
};

export default LargeCard;