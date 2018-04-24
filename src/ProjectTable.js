import React, {Component} from 'react';
import ProjectCategoryRow from './ProjectCategoryRow';
import ProjectRow from './ProjectRow';

class ProjectTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.projects.forEach((project) => {
      if (project.category !== lastCategory) {
        rows.push(
          <ProjectCategoryRow
            category={project.category}
            key={project.category} />
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Demo</th>
            <th>Sources</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProjectTable