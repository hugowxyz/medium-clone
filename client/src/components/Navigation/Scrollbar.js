import React from 'react';

import './Scrollbar.css'

const tags = [
  "Home",
  "Coronavirus Blog",
  "Popular",
  "OneZero",
  "Elemental",
  "Gen",
  "Zero",
  "Forge",
  "Human parts",
  "Marker",
  "Human parts",
  "Human parts",
  "Human parts",
  "Human parts",
  "Human parts",
  "Human parts",
]

const Scrollbar = () => {

  let translate = 0

  const handleLeft = () => {
    const wrapper = document.querySelector('.topics-nav-wrapper')
    const length = wrapper.offsetWidth
    console.log(translate - 200, length)
    if ( (translate - 200) + (length - 950) >= 0 ) {
      translate -= 200
      wrapper.style.cssText = `transform: translateX(${translate}px);`
    }
  }

  const handleRight = () => {
    const wrapper = document.querySelector('.topics-nav-wrapper')
    if ( translate + 200 <= 0 ) {
      translate += 200
      wrapper.style.cssText = `transform: translateX(${translate}px);`
    }
  }

  return (
    <nav className="topics-nav">
      <div className="container d-flex">
        <div onClick={handleRight} className="left-arrow">
          &lt;
        </div>
        <div className="topics-nav-list">
          <div className="topics-nav-wrapper">
            {tags.map(tag => <li className="topics-nav-item"><a href="#home">{tag}</a></li>)}
          </div>
        </div>
        <div onClick={handleLeft} className="right-arrow">
          &gt;
        </div>
      </div>
    </nav>
  );
};

export default Scrollbar;