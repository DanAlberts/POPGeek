import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const CategoryTile = (props) => {




  return(
    <div className="category-title">
      <h4>
        <Link to={`/categories/${props.id}`}>
          {props.title}
        </Link>
      </h4>
      <h6>{props.description}</h6>
    </div>
  )
}

export default CategoryTile