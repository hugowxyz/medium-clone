import React from 'react';

const Scrollbar = () => {
  return (
    <nav className="nav-scroll--topics">
      <div className="container d-flex">
        <div style={{
          cursor: 'pointer'
        }}>&lt;</div>
        <ul style={{
          maxWidth: '98%',
          width: '98%'
        }}>
          {}
        </ul>
        <div style={{
          cursor: 'pointer'
        }}>&gt;</div>
      </div>
    </nav>
  );
};

export default Scrollbar;