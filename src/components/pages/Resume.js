import React from "react";
import myResume from '../../todd-harvey-resume.pdf'

export default function Resume() {
  const skills = {
    backgroundColor: '#cccccc',
    margin: 0,
    padding: 20
  }
  const skillList = {
    listStyle: 'none'
  }
  return (
    <div style={skills}>
      <h2>Resume</h2>
      <p>My resume can be <a className="resume-link" href={myResume} rel="noreferrer" target="_blank">downloaded here</a>.</p>

      <h3>Frontend Proficiencies</h3>
      <ul style={skillList}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>

      <h3>Backend Proficiencies</h3>
      <ul style={skillList}>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>APIs</li>
        <li>PHP</li>
      </ul>
    </div>
  )
}