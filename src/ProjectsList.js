import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// Data will be read-only so should use prop instead of state
class ProjectsList extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	render() {
		const { projects, section } = this.props
		const { query } = this.state

		let showingProjects

		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingProjects = projects.filter((project) => match.test(project.title))
		} else {
			showingProjects = projects
		}

		showingProjects.sort(sortBy('title'))

		return (

			<div>
				<input
					className='search-projects'
					type='text'
					placeholder='Search Projects'
					value={query}
					onChange={(event) => this.updateQuery(event.target.value)}
				/>
				<h2>{section}</h2>
				<ol>
					{showingProjects.map((project) => (
						<li key={project.title}>
							<h4>{project.title}</h4>
							<img src="http://placeholder.pics/svg/300" alt="placeholder" />
							<p>{project.description}</p>
							<a href={project.demo}>demo</a>
							<a href={project.source}>source</a>
						</li>
					))
					}

				</ol>

			</div>
		)
	}
}

export default ProjectsList