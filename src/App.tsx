import React, { Component } from "react"
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Switch, Route } from "react-router-dom"
import IpfsRouter from 'ipfs-react-router'

import defaultTheme from './theme'

import Dashboard from './components/dashboard'
import Header from './components/header'
import Footer from './components/footer'

import Store from "./stores"
const emitter = Store.emitter
const store = Store.store

class App extends Component {
  state = {}

  componentWillMount() {
  }

  render() {
    return (
      <MuiThemeProvider theme={ createMuiTheme(defaultTheme) }>
        <CssBaseline />
        <IpfsRouter>
          <div style={{
            // styles here
          }}>
            <Header />
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
            <Footer />
          </div>
        </IpfsRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
