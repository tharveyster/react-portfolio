import React from "react";
import Project from '../Project';
import pic1 from '../../images/personal-cookbook-1.png';

const projects = [
  {
    title: 'Personal Cookbook',
    resources: 'Full Stack',
    github: 'https://github.com/tharveyster/recipe-search',
    deployed: 'https://tranquil-springs-98499.herokuapp.com/',
    image: pic1,
    alt: ''
  },
  {
    title: 'Test App 2',
    resources: 'Node, Express',
    github: '',
    deployed: '',
    image: '',
    alt: ''
  },
  {
    title: 'Test App 3',
    resources: 'React, MongoDB',
    github: '',
    deployed: '',
    image: '',
    alt: ''
  },
  {
    title: 'Test App 4',
    resources: 'MERN',
    github: '',
    deployed: '',
    image: '',
    alt: ''
  }
]

export default function Projects() {
  return (
    <div className="work">
      <h2>Portfolio</h2>
      <div className="cards">
      {projects.map((project ) => (
      <Project
        title={project.title}
        resources={project.resources}
        github={project.github}
        deployed={project.deployed}
        image={project.image}
        alt={project.alt}
      />
      ))}
      </div>
    </div>
  )
}