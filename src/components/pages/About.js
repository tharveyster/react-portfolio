import React from "react";
import profilePic from '../../images/todd.jpg';

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img className="picture" src={profilePic} alt="Todd Harvey" />
      <p>Full stack web developer with a strong interest in all things web-related. Earned a Certificate in Full Stack Web Development from Johns Hopkins University. Strong understanding of HTML, CSS, and APIs (web, third-party, and server-side), with a working knowledge of Javascript, jQuery, Bootstrap, Node.js, React.js, MySQL, MongoDB, and PHP. Constantly looking for ways to improve existing projects, in appearance, functionality, and user experience, and strive to stay current with the technologies in this ever-changing field. As an eager learner and natural "helper", I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and continue to develop innovative, and exciting work.
      </p>
    </div>
  )
}