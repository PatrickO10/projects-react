import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProjectTable from './ProjectTable';


class FilterableProjectTable extends Component {
    render() {
        return (
            <div>
        		<SearchBar />
        		<ProjectTable projects={this.props.projects} />
        	</div>
        );
    }
}

export default FilterableProjectTable