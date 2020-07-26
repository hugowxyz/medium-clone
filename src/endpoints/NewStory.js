import React from 'react';
import { useState } from 'react';

import './NewStory.scss'

const NewStory = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const initialHeight = 66

  const processDraft = event => {
    console.log(title, body)
  }

  const dynamicTextarea = element => {
    element.rows = 1
    const rows = Math.ceil(element.scrollHeight / initialHeight)
    element.rows = rows
  }

  const processTitle = event => {
    dynamicTextarea(event.target)
    setTitle(event.target.value)
  }

  const processBody = event => {
    setBody(event.target.value)
  }

  return (
    <main className="newStory">
      <div className="container">

        <button
          className="btn btn-success btn--publish"
          onClick={processDraft}
        >
          Publish
        </button>

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
     
  );
};

export default NewStory;