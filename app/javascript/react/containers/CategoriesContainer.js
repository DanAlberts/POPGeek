import React, { useState, useEffect } from "react"
import CategoryTile from '../components/CategoryTile'

const CategoriesContainer = (props) => {
  const[categories, setCategories] = useState([])

  useEffect(()=> {
    fetch("/api/v1/boards/1/categories")
    .then((response)=> {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(categoriesBody => {
      setCategories(categoriesBody.categories)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const categoriesList = categories.map(category => {
    return(
      <CategoryTile
        key={category.id}
        id={category.id}
        title={category.title}
        description={category.description}
      />
    )
  })
  return(
    <div className="index">
      {categoriesList}
    </div>
  )
}

export default CategoriesContainer