import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ProjectsList from './ProjectsList'
import FilterableProjectTable from './FilterableProjectTable'
import * as data from './utils/data'

class App extends Component {

  render() {
    return (
      <div className="App">
        <FilterableProjectTable projects={data.PROJECTS} />
      </div>
    )
  }
}

export default App