import React, { Component } from 'react'
import ProjectsList from './ProjectsList'
import * as data from './utils/data'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> hello projects </h1>
        <ProjectsList section="React Projects" projects={data.reactProjects} />
        <ProjectsList section="Front-End Projects" projects={data.frontEndProjects}/>
        <ProjectsList section="FullStack Projects" projects={data.fullStackProjects} />
      </div>
    );
  }
}

export default App;
