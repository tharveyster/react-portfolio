import React from "react";

const card = {
  
}
const title = {
  backgroundColor: 'orange'
}

export default function Project(props) {
  return (
    <div style={card}>
        <h3 style={title}>{props.title}</h3>
      <p>{props.resources}</p>
    </div>
  )
}