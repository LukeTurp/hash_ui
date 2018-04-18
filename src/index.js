import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store-index'
import App from './containers/app'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Project Hash</h1>
            <Link to="/login">Login</Link>
            <span> | </span>
            <Link to="/create-user">  Create New User</Link>
          </header>
          <App />
        </div>
    </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
