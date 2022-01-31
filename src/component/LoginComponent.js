import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form");
    }
    console.log(email, password);
  };
  return (
    <Row>
      <Col>
        <h1>Client Login</h1>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <Link to="/password_reset">Forget Password?</Link>
      </Col>
    </Row>
  );
};

export default LoginComponent;
