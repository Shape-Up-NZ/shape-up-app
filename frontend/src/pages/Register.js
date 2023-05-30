import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { BsEnvelope, BsLock } from "react-icons/bs";
import FormContainer from "../components/FormContainer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  return (
    <div className=" py-5">
      <FormContainer className="d-flex justify-content-center">
        <h1>Register Account</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className=" py-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            <BsLock /> Sign Up
          </Button>

          <Row className="py-3">
            <Col>
              Already Have An Account? <Link to="/pages/login">Login</Link>
            </Col>
          </Row>
          
        </Form>
      </FormContainer>
    </div>
  );
};

export default Register;
