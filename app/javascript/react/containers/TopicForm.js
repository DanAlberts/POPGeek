import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import _ from 'lodash'
import ErrorList from "./ErrorList"

const TopicForm = (props) => {
  const[errors, setErrors] = useState({})
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newTopic, setNewTopic] = useState({
    title: "",
  })

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

  const handleParkSubmit = (event) =>{
    event.preventDefault()
    if (!validForSubmission()){
      return
    }

    let payload = {
      title:newTopic.title,
    }

    addNewTopic(payload)
    setNewTopic({
      title: "",
    })
  }

  const addNewTopic = payload => {
    fetch("/api/v1/topics", {
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

  if (shouldRedirect){
    return <Redirect to="/topics" />
  }


  return(
    <div className="form narrow-form" id="park-review-form">
      <h2 id="review-form-title">Submit a Topic</h2>
      <form onSubmit={handleTopicSubmit} className="new-parkform">
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

        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default TopicForm
