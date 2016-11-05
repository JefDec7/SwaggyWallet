import React from 'react'
import { render } from 'react-dom'
import ResetPage from './modules/resetPage'
import HomePage from './modules/homePage'
import { Router, Route, hashHistory } from 'react-router'

//render(<Toolbar/>, document.getElementById('toolbar'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/reset" component={ResetPage}/>
  </Router>
), document.getElementById('app'))
