import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaInstagram />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaTwitter />
      </a>
      <a href="https://github.com/AshwathKotari" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaGithub />
      </a>
      <a href=''  target="_blank" rel="noopener noreferrer" className="social-link"> <FaLinkedin/></a>
    </div>
  );
};
