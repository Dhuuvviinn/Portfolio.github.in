import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';
function Header() {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT3 OpenAI
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
          asperiores doloremque odio tenetur modi aliquid nam praesentium
          accusamus voluptatem, labore odit. Officia voluptatem vero dolorum
          quos expedita cupiditate veritatis odio!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
          <p>1,600 req to access a visited in last 24 hours</p>
        </div>
      </div>
      <div className="gtp3__header-image">
        <img src={ai} alt="" className="im" />
      </div>
    </div>
  );
}

export default Header;
