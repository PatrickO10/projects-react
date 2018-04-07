import React, { Component } from 'react';

// Data will be read-only so should use prop instead of state
class ProjectsList extends Component {
	render() {
		const { projects } = this.props

		return (

			<div>
				<ol>
					{projects.map((project, index) => (
						<li key={project.title}>
							<h2>{project.title}</h2>
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