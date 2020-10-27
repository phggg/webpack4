import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './index.scss'
import Table from './table.jsx'

const columns = [
  {
    id: 'name',
    title: 'Name',
    sort: true
  },
  {
    id: 'net_worth',
    title: 'Net Worth',
    sort: false
  }
]

const tableData = [
  {
    name: 'Amancio Ortega',
    net_worth: 62.7,
    id: 1
  },
  {
    name: 'Acrnard Arnault',
    net_worth: 76,
    id: 2
  },
  {
    name: 'Aall Gates',
    net_worth: 96.5,
    id: 3
  },
  {
    name: 'Carlos Sim Helu',
    net_worth: 64,
    id: 4
  },
  {
    name: 'Jeff Bezos',
    net_worth: 131,
    id: 5
  },
  {
    name: 'Larry Ellison',
    net_worth: 58,
    id: 6
  },
  {
    name: 'Larry Page',
    net_worth: 50.8,
    id: 7
  },
  {
    name: 'Mark Zuckerberg',
    net_worth: 62.3,
    id: 8
  },
  {
    name: 'Michael Bloomberg',
    net_worth: 55.5,
    id: 9
  },
  {
    name: 'Warren Buffet',
    net_worth: 82.5,
    id: 10
  }
];
class App extends Component {

  render () {
    return <div> <Table columns={columns} data={tableData} /></div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))