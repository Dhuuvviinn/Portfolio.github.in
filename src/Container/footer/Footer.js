import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <>
      <hr />
      <div className="gtp3__footer">
        <div className="gtp__footer-top ">
          <div className="gradient_text">
            <h1>Do you want to Step into the Future before other</h1>
          </div>
          <button className="button">Request Early Access</button>
        </div>
        <div className="gtp3__footer-container">
          <div className="gtp3__1">
            <h1>GPT-3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="supp">
            <h4>Links</h4>
            <h4>Overons</h4>
            <h4>Social Needed</h4>
            <h4>Counters</h4>
            <h4>Contact</h4>
          </div>
          <div className="supp">
            <h4>Company</h4>
            <h4>Term & Conditon</h4>
            <h4>Privacy Policy</h4>
            <h4>Contact</h4>
          </div>
          <div className="supp">
            <h4>Get In touch</h4>
            <h4>Lorem ipsum</h4>
            <h4>OBS-132567</h4>
            <h4>info@payme.net</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
