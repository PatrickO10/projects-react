import React, { Component } from 'react'
import ProjectCategoryRow from './ProjectCategoryRow'
import ProjectRow from './ProjectRow'
import escapeRegExp from 'escape-string-regexp'
import { Row } from 'react-bootstrap'

class ProjectTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const finishedProjectsOnly = this.props.finishedProjectsOnly;

        const rows = [];
        const match = new RegExp(escapeRegExp(filterText), 'i')
        let lastCategory = null;

        this.props.projects
            .filter(project =>
                (match.test(project.category) &&
                (!(finishedProjectsOnly && !project.completed)))
            )
            .map(project => {
              if (project.category !== lastCategory) {
                rows.push(
                  <ProjectCategoryRow
                    category={project.category}
                    key={project.category}
                  />
                );
              }

              rows.push(
                <ProjectRow
                  project={project}
                  key={project.title} />
              );
              lastCategory = project.category;
            });

        return (
        <Row>{rows}</Row>
        );
    }
}

export default ProjectTable