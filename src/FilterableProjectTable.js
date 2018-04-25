import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProjectTable from './ProjectTable';


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
            <div>
        		<SearchBar
        			filterText={this.state.filterText}
        			finishedProjectsOnly={this.state.finishedProjectsOnly}
        			onFilterTextChange={this.handleTextChange.bind(this)}
        			onFinishedProjectsOnlyChange={this.handleFinProjectsOnly.bind(this)}

        		/>
        		<ProjectTable
        			projects={this.props.projects}
        			filterText={this.state.filterText}
        			finishedProjectsOnly={this.state.finishedProjectsOnly}
        		/>
        	</div>
        );
    }
}

export default FilterableProjectTable