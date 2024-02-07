import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiMongodb } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import './Techstack.css'; 

export const Techstack = () => {
  return (
    <div className="tech-stack">
      <FaHtml5 className="icon" />
      <FaCss3 className="icon" />
      <IoLogoJavascript className="icon" />
      <FaReact className="icon" />
      <FaNodeJs className="icon" />
      <DiMongodb className="icon" />
      <FaGithub className="icon" />
      <SiTailwindcss className="icon" />
      <FaFigma className="icon" />
    </div>
  );
};
