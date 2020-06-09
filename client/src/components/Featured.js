import React from 'react';

import './Featured.css'

import Primary from './Articles/Primary'
import Secondary from './Articles/Secondary'
import Tertiary from './Articles/Tertiary'


const primary = {
  title: 'Books to Check your White Priviledge',
  teaser: 'Cause it\'s about time.',
  metadata: {
    publisher: 'Strand Book Store',
    date: 'Feb 8, 2019',
    length: '4'
  }
}

const secondary = [
  {
    title: 'Could the Coronavirus be weakening as it is spreading?',
    metadata: {
      publisher: 'Markham Heid in Elemental',
      date: 'June 4',
      length: '4'
    }
  },
  {
    title: 'Develop mental toughness with this ancient practice',
    metadata: {
      publisher: 'Darius Foreaux',
      date: 'June 4',
      length: '4'
    }
  },
  {
    title: 'How to become a ninja coder in React',
    metadata: {
      publisher: 'Markham Heid in Elemental',
      date: 'June 4',
      length: '4'
    }
  }
]

const tertiary = {
  title: 'The Wrong Side of the Fence',
  teaser: 'For those of you who claimed that...',
  metadata: {
    date: '6 June',
    publisher: 'Somebody',
    length: 5
  }
  
}

const Featured = () => {
  return (
    <div className="container">
      <section className="featured mt-5">
        <div className="row">
          <div className="col-4">
            <Primary {...primary} />
          </div>
          <div className="col-5">
            {secondary.map(entry => <Secondary {...entry}/>)}
          </div>
          <div className="col-3">
            <Tertiary {...tertiary} />
          </div>
        </div>
      </section>
      <hr/>
    </div>
  );
};

export default Featured;