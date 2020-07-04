import React from 'react';

import './Create.css'
import { useState } from 'react';

const Create = () => {
  const [value, setValue] = useState('')
  let baseHeight = 74, heightDiff = 36

  const handleChange = event => {
    const el = event.target
    let rows
    if (el.scrollHeight === baseHeight) rows = 2
    else rows = Math.ceil((el.scrollHeight-baseHeight)/heightDiff) + 2
    el.rows = rows
    setValue(event.target.value)
  }

  return (
    <main className='postArticle-content'>
      <div className="container">
        <input type="text" name="title" id="title" placeholder="Title"/> <br/>
        <textarea 
        value={value}
        onChange={handleChange}
        type="text" 
        name="article" 
        id="article"
        placeholder="Tell your story..."/>
      </div>
    </main>
  );
};

export default Create;