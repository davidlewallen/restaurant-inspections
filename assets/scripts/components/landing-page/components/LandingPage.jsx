import React from 'react';
import { Row, Col } from 'react-bootstrap';

const { array } = React.PropTypes;
const propTypes = {
  inspectionData: array,
};

function LandingPage(props) {
  return (
    <Row className="landing-page">
      <Col
        xs={12}
        className="header"
      >
        <h1>This is the header</h1>
        <ul>
          {props.inspectionData.map(element => (
            <li>{element.restaurant_name}</li>
            ))}
        </ul>
      </Col>
    </Row>
  );
}

LandingPage.propTypes = propTypes;
LandingPage.defaultProp = { inspectionData: [] };
export default LandingPage;
