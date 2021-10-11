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
  }
]

export default function Projects() {
  return (
    <div className="work">
      <h2>Portfolio</h2>
      {projects.map((project ) => (
      <Project
        title={project.title}
        resources={project.resources}
      />
      ))}
    </div>
  )
}