import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const TopicForm = (props) => {
  const[errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newTopic, setNewTopic] = useState({
    title: "",
    content: ""
  })

    let categoryId = props.match.params.id

  const handleFieldChange = event => {
    setNewTopic({
      ...newTopic,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewTopic({
      title: "",
      content: ""
    })
    setErrors({})
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["title"]
    requiredFields.forEach(field => {
      if (newTopic[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleTopicSubmit = (event) =>{
    event.preventDefault()
    if (!validForSubmission()){
      return
    }

    let payload = {
      title:newTopic.title,
      post:{ content:newTopic.content}
    }

    addNewTopic(payload)
    setNewTopic({
      title: "",
      content: ""
    })
  }

  const addNewTopic = payload => {
    const categoryId = props.match.params.id
    console.log(categoryId)
    fetch(`/api/v1/categories/${categoryId}/topics`, {
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
        setShouldRedirect(true)
    })
    .catch((error) => {console.error("error in fetch")
    })
  }
  const redirect = `/categories/${categoryId}/`
  if (shouldRedirect){
    return <Redirect to={redirect} />
  }


  return(
    <div className="form narrow-form" id="new-topic-form">
      <h2 id="review-form-title">Submit a Topic</h2>
      <form onSubmit={handleTopicSubmit} className="new-topicform">
        <ErrorList errors={errors} />
        <label>
          Topic Title
          <input
            name="title"
            type="text"
            onChange={handleFieldChange}
            value={newTopic.title}
          />
        </label>
        <label>
          Topic First Post
          <textarea
            name="content"
            rows="20"
            onChange={handleFieldChange}
            value={newTopic.content}
          />
        </label>

        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default TopicForm
