import React, { useState, useEffect } from "react"

const CategoryTile = (props) => {




  return(
    <div className="category-title">
      <h4>
        <a>{props.title}</a>
      </h4>
      <h6>{props.description}</h6>
    </div>
  )
}

export default CategoryTile