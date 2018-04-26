import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'

class ProjectCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <Row>
        <Col xs={12}>
          {category}
        </Col>
      </Row>
    );
  }
}

export default ProjectCategoryRow