import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './i18nextInit'

import App from './App'
import store from './utils/store'
import history from './utils/history'

import './index.css'
import './styles/landingpage.css'
import './styles/footer.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
