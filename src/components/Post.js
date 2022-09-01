import React from 'react'
import markerIcon from '../marker-icon.png'

function Post(props) {
  return (
    <section className="post">
      <img src={`../images/${props.post.imageUrl}`} class="post-img"></img>
      <div class="post-text">
        <img src={markerIcon}></img>
        <span>{props.post.location}</span> 
        <a href={props.post.googleMapsUrl}>View on Google Maps</a> 
        <h1>{props.post.title}</h1>
        <p><b>{props.post.startDate} - {props.post.endDate}</b></p>
        <p className="description">{props.post.description}</p>
      </div>
    </section>
  )
}

export default Post