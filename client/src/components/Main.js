import React from 'react';
import './Main.css'
import MainA from './Articles/MainA'
import generateArticle from './utilities/generateArticle'
import PopularEntry from './Navigation/PopularEntry';

const articles = [
  {
    title: 'How to exist',
    teaser: 'Very insightful guide',
    metadata: {
      why: 'Based on your reading history',
      date: '6 Jun',
      length: 12
    }
  },
  {
    title: 'How to exist',
    teaser: 'Very insightful guide',
    metadata: {
      why: 'Based on your reading history',
      date: '6 Jun',
      length: 12
    }
  },
  {
    title: 'How to exist',
    teaser: 'Very insightful guide',
    metadata: {
      why: 'Based on your reading history',
      date: '6 Jun',
      length: 12
    }
  },
  {
    title: 'How to exist',
    teaser: 'Very insightful guide',
    metadata: {
      why: 'Based on your reading history',
      date: '6 Jun',
      length: 12
    }
  },
]

const popularEntries = [
  {
    ordinal: '01',
    title: 'Something Something',
    metadata: {
      publisher: 'Somebody',
      date: '6 Jun',
      length: 5
    }
  },
  {
    ordinal: '02',
    title: 'Something Something',
    metadata: {
      publisher: 'Somebody',
      date: '6 Jun',
      length: 5
    }
  },
  {
    ordinal: '03',
    title: 'Something Something',
    metadata: {
      publisher: 'Somebody',
      date: '6 Jun',
      length: 5
    }
  },
  {
    ordinal: '04',
    title: 'Something Something',
    metadata: {
      publisher: 'Somebody',
      date: '6 Jun',
      length: 5
    }
  },
  {
    ordinal: '05',
    title: 'Something Something',
    metadata: {
      publisher: 'Somebody',
      date: '6 Jun',
      length: 5
    }
  },
]

const Main = () => {
  
  return (
    <main class="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-8">
            {articles.map(article => <MainA {...article} />)}
          </div>
          <div className="col-4">
            <h4 className="mt-4">Popular on Hugo</h4>
            <hr/>
            {popularEntries.map(entry => <PopularEntry {...entry} />)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;