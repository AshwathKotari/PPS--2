import React from 'react';
import './Project.css'; 
import TaskMaster from './TaskMaster.jpg'

const Project = () => {
  const projects = [
    {
      title: 'Task Master',
      description: 'Helps people to finish tasks and stores data in local storage',
      //imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/TaskManager',
      liveUrl: 'https://main--taskmasterreactapp.netlify.app/'
    },
    {
      title: 'MovieSearchApp',
      description: 'Helps people to get details of movies',
      //imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/MovieSearchApp',
      liveUrl: 'https://moviesearchreactappashwath.netlify.app/'
    },
    {
      title: 'CBT Companion',
      description: 'Helps people to improve their Mental Health',
      //imageUrl: '',
      githubUrl: 'https://github.com/AshwathKotari/CBT-RR',
      liveUrl: 'https://cbtrr.netlify.app/'
    },
    
   
    
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
