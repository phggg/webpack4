import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './index.scss'
import axios from 'ts-axios-bd'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import List from './list'

class App extends Component {

  componentDidMount () {
    axios.get('/react/api/header.json')
      .then((res) => {
        console.log(res);
      })
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={List} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))