import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ProjectsList from './ProjectsList'
import * as data from './utils/data'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Route path="/" render={() => (
        <ProjectsList section="React Projects" projects={data.reactProjects} />
        )}
      />
      <Route path="/" render={() => (
        <ProjectsList section="Front-End Projects" projects={data.frontEndProjects}/>
        )}
      />
      <Route path="/" render={() => (
        <ProjectsList section="FullStack Projects" projects={data.fullStackProjects} />
        )}
      />
      </div>
    )
  }
}

export default App