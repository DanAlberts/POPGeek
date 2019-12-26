import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'
import BoardIndex from '../containers/BoardIndex';
import CategoryShow from '../containers/CategoryShow';
import TopicForm from '../containers/TopicForm';
import TopicShow from '../containers/TopicShow';

const App = (props) => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/boards" component={BoardIndex}/>
        <Route exact path="/categories/:id" component={CategoryShow}/>
        <Route exact path="/categories/:id/topics/new" component={TopicForm}/>
        <Route exact path="/categories/:id/topics/:tid" component={TopicShow}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App