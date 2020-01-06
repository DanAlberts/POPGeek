import React, { useState, useEffect } from "react"
import CategoriesContainer from './CategoriesContainer'

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
      setBoards(boardBody.boards)
      // setCurrentUserId(boardBody.scope[0].id)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

    const boardList = boards.map(board => {
    return(
      <div className="board-title ctitle">
      <h2 className="b-title">{board.title}</h2>
      <CategoriesContainer

      />
      </div>
    )
  })

  return(
    <div className="index">
      <div className="index-top">
        <h5>See the Categories below! Please Register to unlock more of the forum!</h5>
      </div>
      <div>
        {boardList}
      </div>
    </div>
  )
}

export default BoardIndex
