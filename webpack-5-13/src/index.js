import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './index.scss'
import _ from 'lodash'

class App extends Component {

  render () {
    return (
      <>
        <div>{_.join(['This', 'is', 'Index'],' ')}</div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))