import React, { useState, useEffect } from "react"
import PostTile from '../components/PostTile'
import { Link } from "react-router-dom"
import PostForm from "./PostForm"

const TopicShow = (props) => {
  const[posts, setPosts] = useState([])
  
  let categoryId = props.match.params.id
  let topicId = props.match.params.tid

  useEffect(()=> {
    fetch(`/api/v1/boards/1/categories/${categoryId}/topics/${topicId}`)
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
    .then(postsBody => {
      setPosts(postsBody.topic.posts)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const newPostPath=`/categories/${categoryId}/topics/${topicId}/posts/new`

  const PostList = posts.map(post => {
    return(
      <PostTile
        key={post.id}
        content={post.content}
        user={post.username}
        topicId={topicId}
      />
    )
  })

  return(
    <div className="index">
      {PostList}
      <div>
        <PostForm
          topicId={topicId}
          categoryId={categoryId}
        />
      </div>
      <div>
        <Link to={newPostPath}>Create New Post</Link>
      </div>
    </div>
  )
}

export default TopicShow