import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsPerson, BsEnvelope, BsLock } from "react-icons/bs";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className=" py-5">
      <Container className="d-flex justify-content-center">
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group controlId="formEmail" className=" py-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formPassword" className=" py-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            <BsPerson /> <BsEnvelope /> <BsLock /> Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
