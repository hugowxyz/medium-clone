import React from 'react';

import Navbar from '../components/navigation/Navbar'
import { useState } from 'react';

import './NewStory.scss'

const NewStory = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const processDraft = event => {
    event.preventDefault()
    console.log(event.target)
  }

  const processTitle = event => {
    setTitle(event.target.value)
  }

  const processBody = event => {
    setBody(event.target.value)
  }

  return (
    <main>

      <Navbar />

      <main className="newStory">
        <div className="container">

          <button className="btn btn-success btn--publish">Publish</button>

          <hr/>
          
          <form onSubmit={processDraft}>
            <textarea
              className="newStory-form--title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={processTitle}
              rows="1"
              maxLength="57"
            />  
            
            <br/>

            <textarea 
              className="newStory-form--body"
              type="text"
              placeholder="Tell your story..."
              value={body}
              onChange={processBody}
              rows="30"
            />

          </form>
          
        </div>
      </main>
     
    </main>
  );
};

export default NewStory;