import React, {Component} from 'react';

class ProjectRow extends Component {
  render() {
    const project = this.props.project;
    const title = project.completed ?
      project.title :
      <span style={{color: 'red'}}>
        {project.title}
      </span>

    return (
      <tr>
        <td><h4>{title}</h4></td>
        <td><img src={project.image} alt="placeholder" /></td>
        <td>{project.description}</td>
        <td><a href={project.demo}>demo</a></td>
        <td><a href={project.source}>source</a></td>
      </tr>
    );
  }
}

export default ProjectRow