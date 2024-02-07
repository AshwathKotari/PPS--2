import React from 'react';
import './Project.css'; // Import your CSS file
import TaskMaster from './TaskMaster.jpg'

const Project = () => {
  const projects = [
    {
      title: 'Task Master',
      description: 'Helps people to finish tasks and stores data in local storage',
      imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/TaskManager',
      liveUrl: 'https://main--taskmasterreactapp.netlify.app/'
    },
    {
      title: 'Task Master',
      description: 'Helps people to finish tasks and stores data in local storage',
      imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/TaskManager',
      liveUrl: 'https://main--taskmasterreactapp.netlify.app/'
    },
    {
      title: 'Task Master',
      description: 'Helps people to finish tasks and stores data in local storage',
      imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/TaskManager',
      liveUrl: 'https://main--taskmasterreactapp.netlify.app/'
    },
    {
      title: 'Task Master',
      description: 'Helps people to finish tasks and stores data in local storage',
      imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/TaskManager',
      liveUrl: 'https://main--taskmasterreactapp.netlify.app/'
    }
   
    // Add more project objects as needed
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</a>
        </div>
      ))}
    </div>
  );
};

export default Project;
