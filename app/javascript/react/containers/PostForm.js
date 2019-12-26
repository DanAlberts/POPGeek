import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const PostForm = (props) => {
  const[errors, setErrors] = useState({})
  // const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newPost, setNewPost] = useState({
    post: ""
  })

    // let categoryId = props.match.params.id
    // let topicId = props.match.params.tid

  const handleFieldChange = event => {
    setNewPost({
      ...newPost,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewPost({
      post: ""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["post"]
    requiredFields.forEach(field => {
      if (newPost[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handlePostSubmit = (event) =>{
    event.preventDefault()
    if (!validForSubmission()){
      return
    }

    let payload = {
      post:newPost.post
    }

    addNewPost(payload)
    setNewPost({
      post: ""
    })
  }

  const addNewPost = payload => {
    fetch(`/api/v1/categories/${props.categoryId}/topics/${props.topicId}/posts`, {
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
        throw(error);
      }
    })
    .then((response)=>{
      return response.json()
    })
    .then((persistedData)=>{

    })
    .catch((error) => {console.error("error in fetch")
    })
  }
  // const redirect = `/categories/${categoryId}`
  // if (shouldRedirect){
  //   return <Redirect to={redirect} />
  // }


  return(
    <div className="form narrow-form" id="new-topic-form">
      <h2 id="review-form-title">Submit a Post</h2>
      <form onSubmit={handlePostSubmit} className="new-postform">
        <ErrorList errors={errors} />
        <label>
          New Post
          <textarea
            name="post"
            rows="15"
            onChange={handleFieldChange}
            value={newPost.post}
          />
        </label>

        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default PostForm
