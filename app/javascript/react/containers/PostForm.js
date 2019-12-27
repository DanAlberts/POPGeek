import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const PostForm = (props) => {
  const[errors, setErrors] = useState({})
  const [newPost, setNewPost] = useState({
    content: ""
  })

  let addNewPost = props.addNewPost

  const handleFieldChange = event => {
    setNewPost({
      ...newPost,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["content"]
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

  const handlePostSubmit = (event) => {
    event.preventDefault()
    if (!validForSubmission()) {
      return
    }

    let payload = {
      content: newPost.content
    }
    addNewPost(payload)
    setNewPost({
      content: ""
    })
  }

  return(
    <div className="form narrow-form" id="new-topic-form">
      <h2 id="review-form-title">Submit a Post</h2>
      <form onSubmit={handlePostSubmit} className="new-postform">
        <ErrorList errors={errors} />
        <label>
          New Post
          <textarea
            name="content"
            rows="15"
            onChange={handleFieldChange}
            value={newPost.content}
          />
        </label>

        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default PostForm
