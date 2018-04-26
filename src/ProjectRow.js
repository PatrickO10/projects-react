import React, {Component} from 'react'
import { Image, ListGroup, ListGroupItem, Panel, PanelGroup, Col } from 'react-bootstrap'

class ProjectRow extends Component {
  render() {
    const project = this.props.project;
    const title = project.completed ?
      project.title :
      <span style={{color: 'red'}}>
        {project.title}
      </span>
    const demo = project.demo ?
    <ListGroupItem href={project.demo} target="_blank" active>demo</ListGroupItem> :
    <ListGroupItem href={project.demo} target="_blank" disabled>demo</ListGroupItem>

    return (
      <Col xs={12} md={4}>
      <Panel bsStyle="primary">
        <Panel.Heading >Project</Panel.Heading>
        <Panel.Body>{title}</Panel.Body>
        <ListGroup>
          <ListGroupItem><Image src={project.image} responsive circle /></ListGroupItem>
          <ListGroupItem className="description">{project.description}</ListGroupItem>
          {demo}
          <ListGroupItem href={project.source} target="_blank" active>source</ListGroupItem>
        </ListGroup>
      </Panel>
      </Col>
    );
  }
}

export default ProjectRow
