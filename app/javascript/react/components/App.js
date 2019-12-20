import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'
import BoardIndex from '../containers/BoardIndex';

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/boards" component={BoardIndex}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App