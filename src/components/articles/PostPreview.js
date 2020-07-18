import React from 'react';
import { Link } from 'react-router-dom'
import ArticleFooter from './ArticleFooter'

import './PostPreview.scss'

const PostPreview = () => {
  return (
    <div className="postPreview ui-scale">

      <div className="postPreview-meta">
        <Link to='/'>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
        </Link>

        <Link to='/'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sunt?</p>
        </Link>
      </div>
      
      <ArticleFooter user='user' date='12 July 2020'/>
    </div>
  );
};

export default PostPreview;