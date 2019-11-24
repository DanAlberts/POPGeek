import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={IndexPage}/> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App