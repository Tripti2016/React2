import React from "react";
import "./navbar.scss";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo.png";
import { useState } from "react";

const NavBar = () => {



  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar section__padding">
      <div className="gpt3--navBar-links">
        <div className="gpt3__navBar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navBar-links-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whtgpt3">What is GPY</a>
          </p>

          <p>
            <a href="#possibiltiy">Open AI</a>
          </p>

          <p>
            <a href="#features">Case Studies</a>
          </p>

          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navBar-sign">
        <p>Sign in</p>
        <button Type="button">SignUp</button>
      </div>
      <div className="gpt3__navBar-menu">
        {toggleMenu
 ?
 <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navBar-menu_container scale-up-center">
          <div className="gpt3__navBar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navBar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
