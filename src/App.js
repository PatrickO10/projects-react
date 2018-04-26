import React, { Component } from 'react'
import FilterableProjectTable from './FilterableProjectTable'
import * as data from './utils/data'
import {Grid} from 'react-bootstrap'

class App extends Component {

  render() {
    return (
      <Grid className="App">
        	<FilterableProjectTable projects={data.PROJECTS} />
      </Grid>
    )
  }
}

export default App