import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => (
  <Container>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
