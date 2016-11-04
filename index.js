import React from 'react'
import { render } from 'react-dom'
import App from './modules/app'
import Toolbar from './modules/toolbar'
import ResetContent from './modules/resetContent'
import HomeContent from './modules/homeContent'
import { Router, Route, hashHistory } from 'react-router'

render(<Toolbar/>, document.getElementById('toolbar'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={HomeContent}/>
    <Route path="/reset" component={ResetContent}/>
  </Router>
), document.getElementById('content'))
