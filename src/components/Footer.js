import React from 'react';

import ghLogo from '../assets/github.svg';

import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>Made by <a href="https://github.com/xinweny">xinweny</a> in 2023</p>
      <a href="./">
        <img src={ghLogo} alt="Github icon" />
      </a>
    </div>
  );
}

export default Footer;
