import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//HashRouter для gh-pages
import { HashRouter, BrowserRouter } from 'react-router-dom'

import store from './App/store'
import App from './App/App'

import './index.scss'
import './assets/css/vars.css'
import './assets/css/reset.css'

ReactDOM.render(
  <HashRouter basename={'https://kirilovvladislav.github.io/todo-list/'}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)