import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const TopicTile = (props) => {




  return(
    <div className="category-title">
      <h4>
        <Link to={`/categories/${props.id}`}>
          {props.title}
        </Link>
      </h4>
    </div>
  )
}

export default TopicTile