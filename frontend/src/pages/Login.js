import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsEnvelope, BsLock } from "react-icons/bs";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formPassword" className=" py-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            <BsEnvelope /> <BsLock /> Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
