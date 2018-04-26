import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProjectTable from './ProjectTable'
import {Row, Col} from 'react-bootstrap'


class FilterableProjectTable extends Component {

    state = {
        filterText: '',
        finishedProjectsOnly: false
    }

    handleTextChange(filterText) {
    	this.setState({
    		filterText: filterText
    	})

    }

    handleFinProjectsOnly(finishedProjectsOnly) {
    	this.setState({
    		finishedProjectsOnly: finishedProjectsOnly
    	})
    }

    render() {
        return (
            <Row>
                <Col xs={12} md={4}>
        		  <SearchBar
        		  	filterText={this.state.filterText}
        		  	finishedProjectsOnly={this.state.finishedProjectsOnly}
        		  	onFilterTextChange={this.handleTextChange.bind(this)}
        		  	onFinishedProjectsOnlyChange={this.handleFinProjectsOnly.bind(this)}

        		  />
                </Col>
                <Col xs={12}>
        		  <ProjectTable
        		  	projects={this.props.projects}
        		  	filterText={this.state.filterText}
        		  	finishedProjectsOnly={this.state.finishedProjectsOnly}
        		  />
                </Col>
        	</Row>
        );
    }
}

export default FilterableProjectTable