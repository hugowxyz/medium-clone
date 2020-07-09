import React from 'react';

import Navbar from '../components/navigation/Navbar'
import Scrollbar from '../components/navigation/Scrollbar'
import LargeCard from '../components/articles/LargeCard'
import SmallCard from '../components/articles/SmallCard';

const data = {
  blogUrl: 'noWhere',
  coverUrl: 'https://cdn-images-1.medium.com/focal/374/136/51/34/1*Au3XmtggFJz9peTUtiejcA.jpeg',
  titleClamp: {
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
          <div className="row mt-4">

            <div className="col-5">

              <LargeCard {...data} />

            </div>

            <div className="col-4">

              <SmallCard {...data} />
              <SmallCard {...data} />
              <SmallCard {...data} />

            </div>

            <div className="col-3">

            </div>

          </div>

          

        </div>
      </section>

    </main>
  );
};

export default Homepage;