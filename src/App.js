import React, { Component } from 'react'
import ProjectsList from './ProjectsList'
import * as data from './utils/data'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> hello projects </h1>
        <ProjectsList projects={data.frontEndProjects}/>
      </div>
    );
  }
}

export default App;
