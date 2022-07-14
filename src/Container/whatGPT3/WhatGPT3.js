import React from 'react';
import Features from '../features/Features';
import './WhatGPT3.css';
function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wwhgpt3">
      <div className="gpt3">
        <h1>What is GPT3</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          incidunt obcaecati eius nesciunt illum dignissimos tempora aspernatur
          repellat dicta. Explicabo officiis quas possimus nemo asperiores
          repudiandae odio obcaecati illum consequuntur.
        </p>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient_text">
          The possibility are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eum perferendis, consequatur quos distinctio
         "
        />
        <Features
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eum perferendis, consequatur quos distinctio
        "
        />
        <Features
          title="Chatbots"
          text=" Lorem ipsum dolor sit amet consectetur,
  adipisicing elit. Eum perferendis, consequatur quos distinctio
  "
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
