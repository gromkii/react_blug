import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

render (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      
    </Route>
  </Router>
, document.getElementById('app'))
