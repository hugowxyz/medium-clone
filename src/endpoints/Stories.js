import React from 'react';
import { Link } from 'react-router-dom'
import Draft from '../components/articles/Draft'

import './Stories.scss'

const Stories = () => {
  return (
    <main>
      <div className="container">
        <section className="header">
            <h3 className="d-inline-block mr-auto"> Your Stories </h3>
            <Link to="/new-story">
              <button className="btn btn-outline-success">
                Write a Story
              </button>
            </Link>
        </section>

        <section className="published">
            <div className="nav">
              <div className="item text-muted">Published</div>
            </div>
            <hr/>
            <Draft />
            <Draft />
            <Draft />

        </section>

      </div>
    </main>
  );
};

export default Stories;