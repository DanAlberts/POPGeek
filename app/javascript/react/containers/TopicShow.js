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

  const addNewPost = payload => {
    fetch(`/api/v1/categories/${categoryId}/topics/${topicId}/posts`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw (error);
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((body) => {
        setPosts(body.topic.posts)
      })
      .catch((error) => {
        console.error("error in fetch")
      })
  }



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
  const clearFields = (event) => {
    event.preventDefault()
    setNewPost({
      content: ""
    })
    setErrors({})
  }


  return(
    <div className="index">
      {PostList}
      <div className="form-css">
        <PostForm
          topicId={topicId}
          categoryId={categoryId}
          addNewPost={addNewPost}
        />
      </div>
      <div>
        <Link to={newPostPath}>Create New Post</Link>
      </div>
    </div>
  )
}

export default TopicShow