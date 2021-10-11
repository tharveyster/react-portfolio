import React from "react";

const cardSize = {
  width: '30%',
  float: 'left',
  margin: 30
}
const title = {
  backgroundColor: 'orange'
}

export default function Project(props) {
  return (
    <div style={cardSize}>
      <div className="col-sm-6" style={title}>
        <h3>{props.title}</h3>
      </div>
      <p>{props.resources}</p>
    </div>
  )
}