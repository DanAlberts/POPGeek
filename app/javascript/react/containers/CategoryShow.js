import React, { useState, useEffect } from "react"
import TopicTile from '../components/TopicTile'
import { Link } from "react-router-dom"

const CategoryShow = (props) => {
  const[topics, setTopics] = useState([])
  
  let categoryId = props.match.params.id

  useEffect(()=> {
    fetch(`/api/v1/boards/1/categories/${categoryId}`)
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
    .then(topicsBody => {
      setTopics(topicsBody.topics)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const newTopicPath=`/categories/${categoryId}/topics/new`

  const topicsList = topics.map(topic => {
    return(
      <TopicTile
        key={topic.id}
        title={topic.title}
      />
    )
  })

  return(
    <div className="index">
      {topicsList}
      <div>
        <Link to={newTopicPath}>Create New Topic</Link>
      </div>
    </div>
  )
}

export default CategoryShow