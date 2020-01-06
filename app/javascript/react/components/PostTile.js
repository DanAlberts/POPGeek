import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const PostTile = (props) => {

  return(
    <div className="post">
      <h4>
        {props.user}
      </h4>
      <p className="post-text">
        {props.content}
      </p>
    </div>
  )
}

export default PostTile