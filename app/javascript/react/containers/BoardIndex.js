import React, { useState, useEffect } from "react"

const BoardIndex = (props) => {
  const[boards, setBoards] = useState([])
  const[currentUserId, setCurrentUserId] = useState(null)

  useEffect(()=> {
    fetch("/api/v1/boards")
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
    .then(boardBody => {
      setParks(boardBody.boards)
      setCurrentUserId(boardBody.scope[0].id)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return(
    <div className="index">
      <div className="index-top">
      <h2 id="index-title">PopGeek Forums</h2>
      <h5>See the Categories below! Please Register to unlock more of the forum!</h5>
      </div>
    </div>
  )
}

export default BoardIndex
