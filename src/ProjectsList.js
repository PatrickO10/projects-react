import React, { Component } from 'react';

// Data will be read-only so should use prop instead of state
class ProjectsList extends Component {
	render() {
		const { projects, section } = this.props

		return (

			<div>
				<h2>{section}</h2>
				<ol>
					{projects.map((project, index) => (
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