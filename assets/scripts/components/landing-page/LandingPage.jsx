import React from 'react';
import { Row, Col } from 'react-bootstrap';

function LandingPage() {
  return (
    <Row className="landing-page">
      <Col
        xs={12}
        className="header"
      >
        <h1>This is the header</h1>
      </Col>
    </Row>
  );
}

export default LandingPage;
