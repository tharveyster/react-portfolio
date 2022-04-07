import React from "react";

export default function Project(props) {
  const card = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className="card" style={card}>
      <h3 className="card-title">{props.title}</h3>
      <p className="card-description">{props.description}</p>
      <h4 className="card-resources">{props.resources}</h4>
      <span className="card-git">
        <a href={props.github} rel="noreferrer" target="_blank">
          GitHub
        </a>
      </span>
      <span className="card-link">
        <a href={props.deployed} rel="noreferrer" target="_blank">
          Deployed
        </a>
      </span>
    </div>
  );
}
