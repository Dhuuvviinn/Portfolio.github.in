import React from 'react';
import './Features.css';
function Features({ title, text }) {
  return (
    <div className="gpt3__features-container__feature ">
      <div className="gpt3__feature-conatiner__feature-title">
        <div>
          <div className="d" />
          <h1>{title}</h1>
        </div>
      </div>
      <div className="gpt3__feature-conatiner__feature-text">{text}</div>
    </div>
  );
}

export default Features;
