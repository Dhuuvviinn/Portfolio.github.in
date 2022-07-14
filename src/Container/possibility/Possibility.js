import React from 'react';
import poss from '../../assets/possibility.png';
import './possibility.css';
function Possibility() {
  return (
    <div className="gpt3__possibility section_padding" id="poss">
      <div className="gpt3__possibility-image">
        <img src={poss} className="im" alt="" />
      </div>
      <div className="gpt3__possibility-container">
        <div className="forMar">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient_text ">
            The Possibility are beyond your imagination
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
            similique suscipit dolores nihil odit iure facere magni nobis rerum
            veniam eaque expedita, dignissimos quasi, et delectus! Natus, id
            eum! Consequatur?
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  );
}

export default Possibility;
