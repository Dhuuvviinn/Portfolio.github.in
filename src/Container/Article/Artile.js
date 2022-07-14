import React from 'react';
import './Article.css';
function Artile(props) {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-Image">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="gpt3__article-container">
        <div>
          <p>{props.Date}</p>
          <h1>{props.title}</h1>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Artile;
