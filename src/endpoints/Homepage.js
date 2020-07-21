import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../components/navigation/Navbar'
import Scrollbar from '../components/navigation/Scrollbar'
import LargeCard from '../components/articles/LargeCard'
import SmallCard from '../components/articles/SmallCard'
import MediumCard from '../components/articles/MediumCard'
import PostPreview from '../components/articles/PostPreview'
import AdaptiveSelectionItem from '../components/navigation/AdaptiveSectionItem'

import './Homepage.scss'

const data = {
  blogUrl: 'noWhere',
  coverUrl: 'https://picsum.photos/200/200',
  meta: {
    title: 'What we don\'t know',
    summary: 'It\'s about swift action -- tapping into emotion'
  },
  metadata: {
    user: 'Dmitropoulos John',
    date: '08/07/20',
    length: '2'
  }
}

const Homepage = () => {
  return (
    <main className="homepage">
      <Navbar />
      <Scrollbar />      
      <section className="hero">
        <div className="container">
          <div className="hero-container">

            <div className="card-container card-container--large">
              <LargeCard {...data}/>
            </div>

            <div className="card-container card-container--small">
              <SmallCard {...data}/>
              <SmallCard {...data}/>
              <SmallCard {...data}/>
            </div>

            <div className="card-container card-container--medium">
              <MediumCard />
            </div>
          </div>

          <Link to='/'>See Editor's Picks &rsaquo;</Link>
          <hr/>

        </div>
      </section>

      <main>
        <div className="container">

          <div className="mainContainer">

            <div className="mainContainer--left">
              <div className="preview">
                Medium
                <Link to='/'> <br/>
                  <button className="btn btn-light">Read now</button>
                </Link>
              </div>
              
              <PostPreview />
              <PostPreview />
              <PostPreview />
              <PostPreview />
            </div>

            <div className="mainContainer--right">
              <h5>Popular on Medium</h5>
              <hr/>
              <AdaptiveSelectionItem n={1} />
              <AdaptiveSelectionItem n={2} />
              <AdaptiveSelectionItem n={3} />
              <AdaptiveSelectionItem n={4} />
              <AdaptiveSelectionItem n={5} />
            </div>

          </div>
        </div>
      </main>

    </main>
  );
};

export default Homepage;