import React from 'react';
import { Link } from 'react-router-dom'

import './MediumCard.scss'

import ArticleFooter from './ArticleFooter'

const MediumCard = () => {
  return (
    <article className="hero-card--medium ui-scale">
        
      <div className="hero-meta">
        
        <Link to='/'>
          <h2>Lorem ipsum dolor sit amet.</h2>
        </Link>
          
        
        <Link to='/'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, placeat?</p>
        </Link>

      </div>

      <ArticleFooter {...{user: 'user', data:'1'}}/>
      
    </article>
  );
};

export default MediumCard;