import React from 'react'
import markerIcon from '../marker-icon.png'

function Post(props) {
  return (
    <div className="post">
      <img src={`../images/${props.post.imageUrl}`} className="post-img"></img>
      <div className="post-text">
        <img src={markerIcon} className="markerIcon"></img>
        <span>{props.post.location}</span> 
        <a href={props.post.googleMapsUrl}>View on Google Maps</a> 
        <h1>{props.post.title}</h1>
        <p><b>{props.post.startDate} - {props.post.endDate}</b></p>
        <p className="description">{props.post.description}</p>
      </div>
    </div>
  )
}

export default Post