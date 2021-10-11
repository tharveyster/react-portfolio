import React from "react";
import Project from '../Project';

const projects = [
  {
    title: 'Test App',
    resources: 'HTML, CSS, JavaScript'
  },
  {
    title: 'Test App 2',
    resources: 'Node, Express'
  },
  {
    title: 'Test App 3',
    resources: 'React, MongoDB'
  },
  {
    title: 'Test App 4',
    resources: 'MERN'
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
      />
      ))}
      </div>
    </div>
  )
}