import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gtp3__navbar-link_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className=" gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wwhgpt3">What is GPT</a>
          </p>
          <p>
            <a href="#possibility">OpenApi</a>
          </p>
          <p>
            <a href="#feature">Case studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => settoggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => settoggle(true)} />
        )}
        {toggle && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-link">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wwhgpt3">What is GPT</a>
              </p>
              <p>
                <a href="#possibility">OpenApi</a>
              </p>
              <p>
                <a href="#feature">Case studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
