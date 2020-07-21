import React from 'react';

import ArticleFooter from '../articles/ArticleFooter'

import './AdaptiveSelectionItem.scss'

const metadata = {
    user: 'Dmitropoulos John',
    date: '08/07/20',
    length: '2'
}

const AdaptiveSectionItem = ({ n }) => {
  return (
    <div className="adaptiveSelection--item">
      <div className="adaptiveSelection--left">
        {n}
      </div>
      <div className="adaptiveSelection--right">
        <h5 className='ui-scale'>Lorem ipsum dolor sit amet.</h5>
        <ArticleFooter {...metadata}/>

      </div>
    </div>
  );
};

export default AdaptiveSectionItem;